/**
 * Single source of truth for every string on the site.
 * Edit copy here only — components never hard-code text.
 */

export type Locale = "en" | "ar";

export const LOCALES: readonly Locale[] = ["en", "ar"] as const;

export const EMAIL = "eslamhamdi95@icloud.com";
export const LINKEDIN =
  "https://www.linkedin.com/in/islam-hamdi-ahmed-7121b6263/";

/** [sectionId, label] — sectionId must match the section's DOM id. */
export type NavItem = [id: string, label: string];
/** [text, isHighlighted] — 1 marks the gold-outlined badge. */
export type Badge = [text: string, highlighted: 0 | 1];
/** [number, label] */
export type Stat = [value: string, label: string];
/** [title, meta] */
export type Cert = [title: string, meta: string];
/** [tcode, description] */
export type TCode = [code: string, description: string];
/** [panelTitle, pills] */
export type SkillGroup = [title: string, items: string[]];

export type Experience = {
  /** years */
  y: string;
  /** title */
  t: string;
  /** org */
  o: string;
  /** bullets */
  b: string[];
  /** chips */
  c: string[];
};

export type Project = {
  /** status label */
  s: string;
  /** status dot color */
  c: string;
  /** title */
  t: string;
  /** paragraph */
  p: string;
  /** chips */
  g: string[];
};

export type FlowStep = {
  /** step name */
  n: string;
  /** description */
  d: string;
  /** transaction codes */
  t: TCode[];
};

export type Dict = {
  nav: NavItem[];
  cta: string;
  badges: Badge[];
  name: string;
  role: string;
  c1: string;
  c2: string;
  stats: Stat[];
  ticker: string[];
  k_about: string;
  h_about: string;
  about: string[];
  cert_h: string;
  certs: Cert[];
  k_exp: string;
  h_exp: string;
  exp: Experience[];
  k_proj: string;
  h_proj: string;
  proj: Project[];
  k_flow: string;
  h_flow: string;
  flow: FlowStep[];
  fnote: string;
  k_skills: string;
  h_skills: string;
  skills: SkillGroup[];
  k_contact: string;
  h_contact: string;
  contact_p: string;
  copy: string;
  copied: string;
  loc: string;
  of: string;
};

export const D: Record<Locale, Dict> = {
  en: {
    nav: [
      ["about", "About"],
      ["experience", "Experience"],
      ["projects", "Projects"],
      ["flow", "Production flow"],
      ["skills", "Skills"],
      ["contact", "Contact"],
    ],
    cta: "Contact",
    badges: [
      ["SAP Business Analyst", 1],
      ["Key User · S/4HANA", 0],
      ["Saudi Arabia", 0],
    ],
    name: "Islam Hamdi Ahmed",
    role: "SAP production planning, from the hatchery floor to the system. I make processes people can actually run.",
    c1: "View projects",
    c2: "Get in touch",
    stats: [
      ["4+", "Years at Al Wataniya"],
      ["20+", "Users trained"],
      ["10–15%", "Efficiency gain"],
      ["5", "SAP & training records"],
    ],
    ticker: [
      "SAP S/4HANA PP",
      "MRP",
      "Production Orders",
      "SAP MM",
      "SAP QM",
      "UAT",
      "Process documentation",
      "SOPs",
      "End-user training",
      "KPI reporting",
      "Hatchery operations",
      "Biosecurity",
    ],
    k_about: "About",
    h_about: "From incubators to S/4HANA.",
    about: [
      "I'm an SAP Business Analyst and Key User on the Digital Transformation team at Al Wataniya Poultry in Saudi Arabia. My work covers S/4HANA Production Planning with MM and QM around it: process analysis, documentation, UAT, user training and management reporting.",
      "Before SAP I ran incubation and hatching for Cobb 500 grandparent flocks. That is why I start from what happens on the shop floor and make the system fit it, not the other way around.",
      "I am growing toward an SAP consultant role and open to SAP PP and functional opportunities.",
    ],
    cert_h: "Credentials",
    certs: [
      [
        "Certificate of Appreciation · WiSys & SAP",
        "Awarded by the CEO of WiSys · April 2025",
      ],
      ["SAP S/4HANA Production Planning", "Record of Achievement"],
      ["Manage Production Orders in SAP S/4HANA", "Record of Achievement"],
      ["Operations Planning · Trax Academy", "Professional course · Oct 2026"],
      ["HATCHEVES · Cobb Academy", "Modules 1–5 · 2023"],
      [
        "B.Sc. Agricultural Information Systems",
        "Faculty of Agriculture, Egypt",
      ],
    ],
    k_exp: "Experience",
    h_exp: "Three roles, one production chain.",
    exp: [
      {
        y: "Aug 2025 – Present",
        t: "SAP Business Analyst & Key User",
        o: "Digital Transformation · Al Wataniya Poultry",
        b: [
          "Improved operational efficiency by 10–15% through SAP PP and MM process optimization and workflow redesign.",
          "Reduced planning delays by improving MRP execution accuracy and production scheduling.",
          "Trained 20+ end-users on S/4HANA, reducing operational errors.",
          "Led UAT cycles and documented production processes to find gaps.",
        ],
        c: ["SAP PP", "MRP", "UAT", "Training"],
      },
      {
        y: "2023 – Aug 2025",
        t: "SAP PP Key User",
        o: "Production Department · S/4HANA",
        b: [
          "Primary Key User for the 2024 SAP Hatchery Business Process project; validated the full process in DEV and supported Go-Live with zero critical issues.",
          "Managed production orders and MRP; tightened goods movement controls to reduce inventory discrepancies.",
          "Authored the Standard Operating Procedure for the Grandparent Hatchery process.",
          "Received a Certificate of Appreciation from WiSys & SAP.",
        ],
        c: ["Go-Live", "Production orders", "SOP", "SAP MM"],
      },
      {
        y: "2021 – 2023",
        t: "Incubation & Hatching Specialist",
        o: "Production · Cobb 500 Grandparent Flock",
        b: [
          "Managed full-cycle incubation and supervised hatchery shift operations.",
          "Operated and maintained setter and hatcher machines.",
          "Improved hatchability through monitoring of temperature, humidity and ventilation.",
          "Tracked hatchery KPIs; ensured quality control and biosecurity compliance.",
        ],
        c: ["Incubation", "Hatchery KPIs", "Biosecurity", "Quality"],
      },
    ],
    k_proj: "Projects",
    h_proj: "Work that shipped, and work in progress.",
    proj: [
      {
        s: "Shipped",
        c: "#3ecf8e",
        t: "Hatchery Go-Live",
        p: "Key User for the 2024 SAP Hatchery process at Al Wataniya Poultry. Validated end to end in DEV and supported Go-Live with zero critical issues.",
        g: ["SAP PP", "S/4HANA", "UAT"],
      },
      {
        s: "Shipped",
        c: "#3ecf8e",
        t: "Grandparent Hatchery SOP",
        p: "The Standard Operating Procedure that standardizes daily hatchery workflows and compliance steps.",
        g: ["SOP", "Hatchery", "Documentation"],
      },
      {
        s: "Live",
        c: "#e4b976",
        t: "Ideas Management",
        p: "Internal platform to submit, review, score and track ideas, pain points and suggestions, with roles, notifications and portfolio reporting.",
        g: [".NET 8", "React", "PostgreSQL"],
      },
      {
        s: "In progress",
        c: "#7aa2f7",
        t: "Hatchery parameters in QM",
        p: "Defining the day 1 to day 22 incubation parameters as Master Inspection Characteristics in SAP QM.",
        g: ["SAP QM", "MIC", "Hatchery"],
      },
    ],
    k_flow: "Production flow",
    h_flow: "Plan to stock, step by step.",
    flow: [
      {
        n: "Plan",
        d: "Set demand and run MRP to see what must be produced.",
        t: [
          ["MD61", "Create planned independent requirements"],
          ["MD01", "MRP run, total planning"],
          ["MD04", "Stock/requirements list"],
        ],
      },
      {
        n: "Convert",
        d: "Turn planned orders into production orders.",
        t: [
          ["CO40", "Convert planned orders collectively"],
          ["CO01", "Create production order"],
        ],
      },
      {
        n: "Release",
        d: "Release the order so it can be issued and confirmed.",
        t: [
          ["CO02", "Change production order (release)"],
          ["COOIS", "Order information system"],
        ],
      },
      {
        n: "Issue",
        d: "Post component consumption against the order.",
        t: [
          ["MIGO", "Goods issue to order (261)"],
          ["MB51", "Material document list"],
        ],
      },
      {
        n: "Confirm",
        d: "Record yield and activities on the order.",
        t: [
          ["CO11N", "Confirmation of production order"],
          ["CO15", "Enter confirmation"],
        ],
      },
      {
        n: "Receive",
        d: "Receive finished goods into stock.",
        t: [
          ["MIGO", "Goods receipt for order (101)"],
          ["MB52", "Warehouse stocks of material"],
        ],
      },
    ],
    fnote: "Standard SAP PP flow, shown as a reference.",
    k_skills: "Skills",
    h_skills: "What I work with.",
    skills: [
      [
        "SAP modules",
        ["PP", "MM", "QM", "MRP", "Production orders", "Batch management"],
      ],
      [
        "Analysis & delivery",
        [
          "UAT",
          "Process documentation",
          "SOPs",
          "KPI reporting",
          "Data analysis",
          "End-user training",
        ],
      ],
      [
        "Tools & stack",
        ["Claude Code", ".NET 8", "React", "PostgreSQL", "Excel", "Git"],
      ],
      [
        "Domain",
        ["Hatchery operations", "Incubation", "Biosecurity", "Cobb 500 flocks"],
      ],
    ],
    k_contact: "Get in touch · Buraydah · GMT+3",
    h_contact: "Let's talk about your SAP project.",
    contact_p:
      "Open to SAP PP, SAP functional and production-technology roles.",
    copy: "Copy email",
    copied: "Copied",
    loc: "Buraydah, Al-Qassim, Saudi Arabia",
    of: "of",
  },
  ar: {
    nav: [
      ["about", "نبذة"],
      ["experience", "الخبرة"],
      ["projects", "المشاريع"],
      ["flow", "دورة الإنتاج"],
      ["skills", "المهارات"],
      ["contact", "تواصل"],
    ],
    cta: "تواصل",
    badges: [
      ["محلل أعمال SAP", 1],
      ["مستخدم رئيسي · S/4HANA", 0],
      ["السعودية", 0],
    ],
    name: "إسلام حمدي أحمد",
    role: "تخطيط الإنتاج في SAP، من أرض الفقاسة إلى النظام. أصمم عمليات يقدر الناس يشغّلوها فعلًا.",
    c1: "المشاريع",
    c2: "تواصل معي",
    stats: [
      ["+4", "سنوات في الوطنية"],
      ["+20", "مستخدم تم تدريبهم"],
      ["10–15%", "تحسن في الكفاءة"],
      ["5", "شهادات SAP وتدريب"],
    ],
    ticker: [
      "SAP S/4HANA PP",
      "MRP",
      "أوامر الإنتاج",
      "SAP MM",
      "SAP QM",
      "UAT",
      "توثيق العمليات",
      "SOP",
      "تدريب المستخدمين",
      "تقارير KPI",
      "عمليات الفقاسة",
      "الأمن الحيوي",
    ],
    k_about: "نبذة",
    h_about: "من الحاضنات إلى S/4HANA.",
    about: [
      "أنا محلل أعمال ومستخدم رئيسي في SAP بفريق التحول الرقمي في الوطنية للدواجن بالسعودية. يشمل عملي تخطيط الإنتاج في S/4HANA مع MM وQM: تحليل العمليات، التوثيق، UAT، تدريب المستخدمين وتقارير الإدارة.",
      "قبل SAP أدرت التفريخ والفقس لقطعان أجداد Cobb 500. لذلك أبدأ مما يحدث في أرض التشغيل وأُطوّع النظام ليناسبه، لا العكس.",
      "أتجه لأصبح مستشار SAP، ومنفتح على فرص SAP PP والوظيفية.",
    ],
    cert_h: "الشهادات",
    certs: [
      ["شهادة تقدير · WiSys وSAP", "من الرئيس التنفيذي لـ WiSys · أبريل 2025"],
      ["SAP S/4HANA Production Planning", "Record of Achievement"],
      ["Manage Production Orders in SAP S/4HANA", "Record of Achievement"],
      ["Operations Planning · Trax Academy", "دورة مهنية · أكتوبر 2026"],
      ["HATCHEVES · Cobb Academy", "الوحدات 1–5 · 2023"],
      ["بكالوريوس نظم المعلومات الزراعية", "كلية الزراعة، مصر"],
    ],
    k_exp: "الخبرة",
    h_exp: "ثلاث وظائف، سلسلة إنتاج واحدة.",
    exp: [
      {
        y: "أغسطس 2025 – الآن",
        t: "محلل أعمال ومستخدم رئيسي SAP",
        o: "التحول الرقمي · الوطنية للدواجن",
        b: [
          "رفعت الكفاءة التشغيلية 10–15% بتحسين عمليات SAP PP وMM وإعادة تصميم سير العمل.",
          "قلّلت تأخيرات التخطيط بتحسين دقة MRP وجدولة الإنتاج.",
          "درّبت أكثر من 20 مستخدمًا على S/4HANA فقلّت الأخطاء التشغيلية.",
          "قدت دورات UAT ووثّقت العمليات لاكتشاف الفجوات.",
        ],
        c: ["SAP PP", "MRP", "UAT", "تدريب"],
      },
      {
        y: "2023 – أغسطس 2025",
        t: "مستخدم رئيسي SAP PP",
        o: "إدارة الإنتاج · S/4HANA",
        b: [
          "المستخدم الرئيسي لمشروع عملية الفقاسة 2024؛ اختبرت العملية كاملة في DEV ودعمت الإطلاق بدون مشكلات حرجة.",
          "أدرت أوامر الإنتاج وMRP وشدّدت ضوابط حركة البضائع لتقليل فروقات المخزون.",
          "كتبت الـ SOP الخاص بعملية فقاسة الجدود.",
          "حصلت على شهادة تقدير من WiSys وSAP.",
        ],
        c: ["Go-Live", "أوامر الإنتاج", "SOP", "SAP MM"],
      },
      {
        y: "2021 – 2023",
        t: "أخصائي تفريخ وفقس",
        o: "الإنتاج · قطيع أجداد Cobb 500",
        b: [
          "أدرت دورة التفريخ كاملة وأشرفت على ورديات الفقاسة.",
          "شغّلت وصنت ماكينات الـ setter والـ hatcher.",
          "حسّنت نسبة الفقس بمراقبة الحرارة والرطوبة والتهوية.",
          "تابعت مؤشرات الأداء وضمنت الجودة والأمن الحيوي.",
        ],
        c: ["التفريخ", "مؤشرات الفقاسة", "الأمن الحيوي", "الجودة"],
      },
    ],
    k_proj: "المشاريع",
    h_proj: "أعمال أُنجزت وأعمال قيد التنفيذ.",
    proj: [
      {
        s: "أُنجز",
        c: "#3ecf8e",
        t: "إطلاق عملية الفقاسة",
        p: "المستخدم الرئيسي لعملية الفقاسة في SAP 2024 بالوطنية للدواجن. اختبار كامل في DEV ودعم الإطلاق بدون مشكلات حرجة.",
        g: ["SAP PP", "S/4HANA", "UAT"],
      },
      {
        s: "أُنجز",
        c: "#3ecf8e",
        t: "SOP فقاسة الجدود",
        p: "إجراء التشغيل القياسي الذي يوحّد سير العمل اليومي وخطوات الالتزام في الفقاسة.",
        g: ["SOP", "فقاسة", "توثيق"],
      },
      {
        s: "يعمل",
        c: "#e4b976",
        t: "إدارة الأفكار",
        p: "منصة داخلية لتقديم الأفكار والمشكلات والاقتراحات ومراجعتها وتقييمها ومتابعتها، مع أدوار وإشعارات وتقارير.",
        g: [".NET 8", "React", "PostgreSQL"],
      },
      {
        s: "قيد التنفيذ",
        c: "#7aa2f7",
        t: "معاملات الفقاسة في QM",
        p: "تعريف معاملات التفريخ من اليوم 1 إلى 22 كـ Master Inspection Characteristics في SAP QM.",
        g: ["SAP QM", "MIC", "فقاسة"],
      },
    ],
    k_flow: "دورة الإنتاج",
    h_flow: "من التخطيط إلى المخزون، خطوة بخطوة.",
    flow: [
      {
        n: "التخطيط",
        d: "تحديد الطلب وتشغيل MRP لمعرفة المطلوب إنتاجه.",
        t: [
          ["MD61", "إنشاء متطلبات مستقلة مخططة"],
          ["MD01", "تشغيل MRP"],
          ["MD04", "قائمة المخزون/المتطلبات"],
        ],
      },
      {
        n: "التحويل",
        d: "تحويل الأوامر المخططة إلى أوامر إنتاج.",
        t: [
          ["CO40", "تحويل جماعي للأوامر المخططة"],
          ["CO01", "إنشاء أمر إنتاج"],
        ],
      },
      {
        n: "الإفراج",
        d: "الإفراج عن الأمر ليمكن الصرف والتأكيد.",
        t: [
          ["CO02", "تغيير أمر الإنتاج (إفراج)"],
          ["COOIS", "نظام معلومات الأوامر"],
        ],
      },
      {
        n: "الصرف",
        d: "ترحيل استهلاك المكونات على الأمر.",
        t: [
          ["MIGO", "صرف بضاعة للأمر (261)"],
          ["MB51", "قائمة مستندات المواد"],
        ],
      },
      {
        n: "التأكيد",
        d: "تسجيل الإنتاج والأنشطة على الأمر.",
        t: [
          ["CO11N", "تأكيد أمر الإنتاج"],
          ["CO15", "إدخال التأكيد"],
        ],
      },
      {
        n: "الاستلام",
        d: "استلام المنتج التام في المخزون.",
        t: [
          ["MIGO", "استلام بضاعة للأمر (101)"],
          ["MB52", "مخزون المستودع للمادة"],
        ],
      },
    ],
    fnote: "مسار SAP PP القياسي كمرجع.",
    k_skills: "المهارات",
    h_skills: "ما أعمل به.",
    skills: [
      ["وحدات SAP", ["PP", "MM", "QM", "MRP", "أوامر الإنتاج", "إدارة الدفعات"]],
      [
        "التحليل والتنفيذ",
        [
          "UAT",
          "توثيق العمليات",
          "SOP",
          "تقارير KPI",
          "تحليل البيانات",
          "تدريب المستخدمين",
        ],
      ],
      ["الأدوات", ["Claude Code", ".NET 8", "React", "PostgreSQL", "Excel", "Git"]],
      ["المجال", ["عمليات الفقاسة", "التفريخ", "الأمن الحيوي", "قطعان Cobb 500"]],
    ],
    k_contact: "تواصل · بريدة · GMT+3",
    h_contact: "لنتحدث عن مشروع SAP الخاص بك.",
    contact_p: "متاح لوظائف SAP PP والوظيفية وتقنية الإنتاج.",
    copy: "انسخ الإيميل",
    copied: "تم النسخ",
    loc: "بريدة، القصيم، السعودية",
    of: "من",
  },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
