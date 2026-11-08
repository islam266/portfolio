import type { Dict } from "@/content/content";

export default function Footer({ d }: { d: Dict }) {
  const year = new Date().getFullYear();

  return (
    <footer className="rule">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-3 py-8">
          <p className="text-[13px] text-muted">
            <span className="ltr">© {year}</span> {d.name}
          </p>
          <p className="text-[13px] text-muted">{d.loc}</p>
        </div>
      </div>
    </footer>
  );
}
