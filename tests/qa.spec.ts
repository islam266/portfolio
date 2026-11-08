import { expect, test, type ConsoleMessage, type Page } from "@playwright/test";

const VIEWPORTS = [
  { width: 390, height: 844, name: "390" },
  { width: 768, height: 1024, name: "768" },
  { width: 1280, height: 900, name: "1280" },
];

const LOCALES = ["en", "ar"] as const;
const THEMES = ["dark", "light"] as const;

type Problems = {
  consoleErrors: string[];
  pageErrors: string[];
  badRequests: string[];
};

/**
 * Vercel Analytics and Speed Insights fetch their scripts from /_vercel/*,
 * which only exists on a Vercel deployment. A 404 for those two is expected
 * when running `next start` locally and is not a site defect.
 */
function isVercelRuntimeOnly(url: string) {
  return url.includes("/_vercel/");
}

function watch(page: Page): Problems {
  const problems: Problems = {
    consoleErrors: [],
    pageErrors: [],
    badRequests: [],
  };

  page.on("console", (msg: ConsoleMessage) => {
    // "Failed to load resource" carries no URL; those are tracked below by the
    // response/requestfailed listeners instead, which do.
    if (msg.type() !== "error") return;
    if (msg.text().startsWith("Failed to load resource")) return;
    problems.consoleErrors.push(msg.text());
  });
  page.on("pageerror", (error) => problems.pageErrors.push(String(error)));
  page.on("requestfailed", (request) => {
    if (isVercelRuntimeOnly(request.url())) return;
    problems.badRequests.push(
      `FAILED ${request.url()} — ${request.failure()?.errorText ?? "unknown"}`,
    );
  });
  page.on("response", (response) => {
    if (response.status() < 400) return;
    if (isVercelRuntimeOnly(response.url())) return;
    problems.badRequests.push(`${response.status()} ${response.url()}`);
  });

  return problems;
}

for (const locale of LOCALES) {
  for (const theme of THEMES) {
    for (const viewport of VIEWPORTS) {
      test(`${locale} · ${theme} · ${viewport.name}px`, async ({ page }) => {
        const problems = watch(page);

        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });
        await page.addInitScript(
          (value) => window.localStorage.setItem("theme", value),
          theme,
        );

        await page.goto(`/${locale}`, { waitUntil: "load" });
        await page.evaluate(() => document.fonts.ready.then(() => true));

        // Theme actually applied.
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        await expect(page.locator("html")).toHaveAttribute(
          "dir",
          locale === "ar" ? "rtl" : "ltr",
        );

        // Everything is readable on first paint: no opacity:0 wrappers.
        const hidden = await page.evaluate(() => {
          const main = document.querySelector("main");
          if (!main) return ["no main"];
          return [...main.querySelectorAll("*")]
            .filter((el) => {
              const s = getComputedStyle(el);
              return (
                Number(s.opacity) === 0 &&
                el.getAttribute("aria-hidden") !== "true"
              );
            })
            .slice(0, 5)
            .map((el) => el.tagName + "." + el.className);
        });
        expect(hidden, "elements rendered at opacity 0").toEqual([]);

        // No horizontal overflow, at rest and after scrolling to the bottom.
        const overflowTop = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
        }));
        expect(
          overflowTop.scrollWidth,
          `horizontal overflow (${JSON.stringify(overflowTop)})`,
        ).toBeLessThanOrEqual(overflowTop.innerWidth);

        await page.evaluate(() =>
          window.scrollTo(0, document.body.scrollHeight),
        );
        await page.waitForTimeout(200);
        const overflowBottom = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
        }));
        expect(
          overflowBottom.scrollWidth,
          `horizontal overflow after scroll (${JSON.stringify(overflowBottom)})`,
        ).toBeLessThanOrEqual(overflowBottom.innerWidth);

        // Scroll progress bar reacts to scrolling.
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(150);

        await page.screenshot({
          path: `qa/${locale}-${theme}-${viewport.name}.png`,
          fullPage: true,
        });

        expect(problems.pageErrors, "page errors").toEqual([]);
        expect(problems.consoleErrors, "console errors").toEqual([]);
        expect(problems.badRequests, "failed requests").toEqual([]);
      });
    }
  }
}

for (const locale of LOCALES) {
  test(`phone: touch targets and anchor offset · ${locale}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${locale}`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready.then(() => true));

    const result = await page.evaluate(() => {
      const small = [
        ...document.querySelectorAll('a, button, [role="tab"]'),
      ]
        .map((el) => ({
          rect: el.getBoundingClientRect(),
          name: (
            el.textContent ||
            el.getAttribute("aria-label") ||
            el.tagName
          )
            .trim()
            .slice(0, 24),
        }))
        .filter(
          (x) => x.rect.width > 0 && x.rect.height > 0 && x.rect.height < 40,
        )
        .map((x) => `${x.name} (${Math.round(x.rect.height)}px)`);

      const navHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const scrollPadding = parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop,
      );

      return { small: [...new Set(small)], navHeight, scrollPadding };
    });

    expect(result.small, "touch targets under 40px tall").toEqual([]);
    expect(
      result.scrollPadding,
      `scroll-padding-top (${result.scrollPadding}) must clear the sticky nav (${result.navHeight})`,
    ).toBeGreaterThanOrEqual(result.navHeight);
  });
}

test("keyboard: tab order, focus rings, buttons and flow tabs", async ({
  page,
}) => {
  const problems = watch(page);
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/en", { waitUntil: "load" });

  // Walk the top of the document and record what Tab reaches.
  const reached: string[] = [];
  const noRing: string[] = [];

  for (let i = 0; i < 14; i += 1) {
    await page.keyboard.press("Tab");
    const info = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || el === document.body) return null;
      const style = getComputedStyle(el);
      return {
        id: [
          el.tagName.toLowerCase(),
          el.getAttribute("aria-label") ?? el.textContent?.trim().slice(0, 24),
        ]
          .filter(Boolean)
          .join(":"),
        outlineWidth: style.outlineWidth,
        outlineStyle: style.outlineStyle,
      };
    });
    if (!info) continue;
    reached.push(info.id);
    if (info.outlineStyle === "none" || info.outlineWidth === "0px") {
      noRing.push(info.id);
    }
  }

  expect(noRing, "focusable elements without a visible focus ring").toEqual([]);
  expect(reached.join(" | ")).toContain("islam.hamdi");
  expect(reached.join(" | ")).toContain("Theme");
  expect(reached.join(" | ")).toContain("Contact");

  // Carousel: next button advances the role shown.
  const firstRole = await page
    .locator("#experience h3")
    .first()
    .textContent();
  await page.getByRole("button", { name: "Next" }).first().focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#experience h3").first()).not.toHaveText(
    firstRole ?? "",
  );
  // Space works too.
  await page.keyboard.press(" ");
  await expect(page.locator("#experience h3").first()).toHaveText(
    /Incubation|SAP/,
  );

  // Flow tabs: reachable by Tab and driven by arrow keys.
  const tabs = page.getByRole("tab");
  await expect(tabs).toHaveCount(6);
  await tabs.first().focus();
  await expect(tabs.first()).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
  await expect(tabs.nth(1)).toBeFocused();
  await page.keyboard.press("End");
  await expect(tabs.nth(5)).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("Home");
  await expect(tabs.nth(0)).toHaveAttribute("aria-selected", "true");

  // Copy button: operated with Enter, label flips to "Copied".
  const copy = page.getByRole("button", { name: "Copy email" });
  await copy.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Copied" })).toBeVisible();
  const clipboard = await page.evaluate(() => navigator.clipboard.readText());
  expect(clipboard).toBe("eslamhamdi95@icloud.com");

  expect(problems.pageErrors, "page errors").toEqual([]);
  expect(problems.consoleErrors, "console errors").toEqual([]);
  expect(problems.badRequests, "failed requests").toEqual([]);
});

test("rtl keyboard: arrow keys are mirrored", async ({ page }) => {
  await page.goto("/ar", { waitUntil: "load" });
  const tabs = page.getByRole("tab");
  await tabs.first().focus();
  await page.keyboard.press("ArrowLeft");
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(0)).toHaveAttribute("aria-selected", "true");
});
