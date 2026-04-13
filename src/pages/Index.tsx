import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/9f10a707-7aa7-457a-861f-084d7ccc2369.jpg";
const PARK_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/1ddda643-a81b-4c43-9546-b0437b229491.jpg";
const KIDS_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/e683d7f4-1c4e-4c53-a668-52628cc0a6cb.jpg";
const LOGO = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/bucket/79efd1ce-1753-462d-8110-f090acd91938.png";

const NAV_ITEMS = [
  { id: "about", label: "Об организации" },
  { id: "directions", label: "Направления" },
  { id: "calendar", label: "Календарь" },
  { id: "park", label: "Экстрим-парк" },
  { id: "docs", label: "Документы" },
  { id: "partners", label: "Партнёры" },
  { id: "contacts", label: "Контакты" },
];

const PARTNERS = [
  "Форсаж",
  "LAVR",
  "КТЗ",
  "Reli Oil",
  "ФМС Краснодарского края",
  "CFMOTO",
  "AWM Trade",
  "Puller",
  "Dragonfly",
  "Gorilla",
  "Red Finch",
  "Терек Радио",
];

const DIRECTIONS = [
  { icon: "Bike", title: "Эндуро", desc: "Соревнования и тренировки по бездорожью и труднопроходимым маршрутам. Дисциплина, требующая высокой технической выносливости и физической подготовки." },
  { icon: "Mountain", title: "Тур-эндуро / Адвенчер", desc: "Многодневные маршрутные соревнования и экспедиции на выносливость по пересечённой местности. Объединяет навыки эндуро с дальними переходами." },
  { icon: "Zap", title: "Эндуро-контест", desc: "Короткие интенсивные испытания на специально подготовленных участках — формат на технику, скорость и мастерство преодоления препятствий." },
  { icon: "Map", title: "Мототуризм", desc: "Дальние выезды, экспедиционные маршруты и путешествия на мотоцикле. Организация маршрутных мотопробегов и туров в экспедиционном формате." },
  { icon: "RotateCcw", title: "Мотоджимхана", desc: "Техника управления мотоциклом на закрытой площадке: точное маневрирование, координация, контроль баланса и скорости на минимальном пространстве." },
  { icon: "Tractor", title: "Квадроциклетный спорт", desc: "Гонки и тренировки на квадроциклах: mud racing, mud ring, трофи-рейд, кантри-кросс. Соревнования на выносливость и технику вождения." },
  { icon: "Users", title: "Детский и юношеский спорт", desc: "Тренировки и соревнования для детей от 5 лет: детское эндуро и детские квадроциклы. Безопасная среда, сертифицированные инструкторы." },
  { icon: "Trophy", title: "Массовые мероприятия", desc: "Фестивали, чемпионаты, открытые старты, семейные заезды, благотворительные пробеги и официальные мероприятия организации." },
  { icon: "Building2", title: "Инфраструктурные проекты", desc: "Создание и развитие спортивных объектов, трасс, тренировочных зон и инфраструктуры для соревнований, обучения и массовых мероприятий." },
  { icon: "Handshake", title: "Взаимодействие", desc: "Сотрудничество с Федерацией мотоциклетного спорта Краснодарского края, Федерацией мотоциклетного спорта Республики Адыгея, органами власти и партнёрами." },
];

type EventStatus = "own" | "participate" | "plan";
type EventDiscipline = "enduro" | "turenduro" | "quad" | "kids";

const DISCIPLINE_LABELS: Record<EventDiscipline, string> = {
  enduro: "Эндуро",
  turenduro: "Тур-эндуро",
  quad: "Квадроциклы",
  kids: "Детские",
};

const STATUS_LABELS: Record<EventStatus, string> = {
  own: "Организуем",
  participate: "Участвуем",
  plan: "Планируем",
};

const EVENTS_2026: {
  date: string;
  title: string;
  place: string;
  status: EventStatus;
  discipline: EventDiscipline;
}[] = [
  { date: "Январь 2026", title: "Мокрая миля", place: "Геленджик / Краснодарский край", status: "own", discipline: "enduro" },
  { date: "Март 2026", title: "Енотка — этап Чемпионата КК по эндуро", place: "Краснодарский край", status: "own", discipline: "enduro" },
  { date: "Сентябрь 2026", title: "Adventure Rally Gelendzhik", place: "Геленджик", status: "own", discipline: "turenduro" },
  { date: "Апрель 2026", title: "Mud Racing — Кубок Адыгеи / Краснодарского края", place: "Адыгея / Краснодарский край", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Маламино — этап Чемпионата КК по квадроциклам", place: "Краснодарский край", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Uchetun Trophy", place: "Россия", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Этап Чемпионата России", place: "Воронеж", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Детская гонка на квадроциклах", place: "Геленджик", status: "plan", discipline: "kids" },
  { date: "Дата уточняется", title: "Алла 11", place: "Россия", status: "own", discipline: "quad" },
  { date: "Дата уточняется", title: "Кубок России", place: "Иваново", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Prime Ring", place: "Россия", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Золото Жигулей", place: "Самарская область", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Пятигорск 9.0", place: "Пятигорск", status: "participate", discipline: "quad" },
  { date: "Дата уточняется", title: "Шахаут", place: "Республика Адыгея", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Арманьяк", place: "Россия", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Последний богатырь", place: "Россия", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Безумка", place: "Россия", status: "participate", discipline: "enduro" },
  { date: "Дата уточняется", title: "Золото Кокана", place: "Астраханская область", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Альфа-рейс", place: "Россия", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Тихий Дон", place: "Ростовская область", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Князь Владимир", place: "Россия", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Баха", place: "Россия", status: "participate", discipline: "turenduro" },
  { date: "Дата уточняется", title: "Великая степь", place: "Россия", status: "participate", discipline: "turenduro" },
];

const NEWS = [
  { date: "14 июля 2023", tag: "Организация", title: "Организация прошла государственную регистрацию", excerpt: "Геленджикская городская общественная организация «Федерация мотоциклетного и квадроциклетного спорта» официально зарегистрирована. ОГРН 1232300040939." },
  { date: "21 февраля 2025", tag: "Экстрим-парк", title: "Ведётся работа над проектом Extreme Park Gelendzhik", excerpt: "Организация развивает концепцию многофункциональной спортивной площадки для соревнований, обучения, семейного отдыха и событийного туризма." },
  { date: "13 ноября 2024", tag: "Детский спорт", title: "Формирование программы детско-юношеских тренировок", excerpt: "Разрабатывается программа тренировок и соревнований для детей и подростков: детское эндуро и детские квадроциклы." },
];

const DOCS_AVAILABLE = [
  { icon: "FileCheck", title: "Свидетельство о регистрации" },
  { icon: "ScrollText", title: "Устав организации" },
  { icon: "Shield", title: "Политика конфиденциальности" },
  { icon: "CheckSquare", title: "Согласие на обработку персональных данных" },
  { icon: "ClipboardList", title: "Положения и регламенты мероприятий" },
  { icon: "FileSignature", title: "Формы заявок и анкет" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", comment: "", agree: false });
  const [formSent, setFormSent] = useState(false);
  const [filterStatus, setFilterStatus] = useState<"all" | EventStatus>("all");
  const [filterDiscipline, setFilterDiscipline] = useState<"all" | EventDiscipline>("all");

  const filteredEvents = EVENTS_2026.filter(e =>
    (filterStatus === "all" || e.status === filterStatus) &&
    (filterDiscipline === "all" || e.discipline === filterDiscipline)
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setActiveForm(null);
      setFormData({ name: "", phone: "", email: "", comment: "", agree: false });
    }, 3000);
  };

  const formTitles: Record<string, string> = {
    member: "Стать участником организации",
    partner: "Стать партнёром",
    event: "Заявка на мероприятие",
    question: "Задать вопрос",
    park: "Связаться по Экстрим-парку",
  };

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] font-golos min-h-screen">

      {/* ═══ HEADER ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center group">
            <img src={LOGO} alt="ФМКСГ — общественная организация" className="h-8 sm:h-10 w-auto object-contain transition-opacity group-hover:opacity-80" />
          </button>

          <nav className="hidden lg:flex items-center gap-5">
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className="text-xs text-[#9e9e9e] hover:text-white transition-colors font-golos tracking-wide uppercase">
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setActiveForm("member")}
              className="hidden sm:flex bg-[#c8102e] hover:bg-[#a50d25] text-white text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors font-oswald tracking-wider uppercase">
              Вступить
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#141414] border-t border-white/10 px-4 py-4">
            {NAV_ITEMS.map(item => (
              <button key={item.id} onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                className="block w-full text-left py-3 text-[#e8e8e8] border-b border-white/5 text-sm font-golos tracking-wide last:border-0">
                {item.label}
              </button>
            ))}
            <button onClick={() => { setActiveForm("member"); setMenuOpen(false); }}
              className="mt-4 w-full bg-[#c8102e] text-white py-3 font-oswald tracking-wider uppercase text-sm rounded-sm">
              Стать участником
            </button>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Мотоспорт — ФМКСГ" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c8102e]" />
              <span className="text-[#c8102e] font-oswald tracking-[0.2em] uppercase text-xs">Геленджикская городская · ОГРН 1232300040939</span>
            </div>

            <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight mb-6">
              Общественная<br />
              организация<br />
              <span className="text-[#c8102e]">мотоциклетного</span><br />
              и квадроциклетного<br />
              спорта
            </h1>

            <p className="text-lg sm:text-xl text-[#e8e8e8]/80 mb-8 max-w-xl leading-relaxed font-golos">
              Геленджикская городская общественная организация. Развиваем массовый и детский мотоспорт, безопасное вождение, спортивную инфраструктуру и Экстрим-парк Геленджик.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => setActiveForm("member")}
                className="bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:scale-105">
                Стать участником
              </button>
              <button onClick={() => scrollTo("park")}
                className="border border-white/30 hover:border-white text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:bg-white/5">
                Экстрим-парк
              </button>
              <button onClick={() => setActiveForm("partner")}
                className="border border-[#c8102e]/50 hover:border-[#c8102e] text-[#c8102e] font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:bg-[#c8102e]/10">
                Стать партнёром
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { num: "10+", label: "дисциплин спорта" },
                { num: "2023", label: "год основания" },
                { num: "ЮФО", label: "зона деятельности" },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-oswald text-3xl text-[#c8102e] font-bold">{s.num}</div>
                  <div className="text-[#9e9e9e] text-xs tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button onClick={() => scrollTo("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/40 hover:text-white transition-colors">
          <Icon name="ChevronDown" size={32} />
        </button>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Об организации</h2>
              <p className="text-[#9e9e9e] text-lg leading-relaxed mt-6 mb-5">
                Геленджикская городская общественная организация «Федерация мотоциклетного и квадроциклетного спорта» (НКО «ФМКСГ») зарегистрирована 14.07.2023 для системного развития мотоспорта в Геленджике и Краснодарском крае.
              </p>
              <p className="text-[#9e9e9e] leading-relaxed mb-5">
                Мы объединяем спортсменов, тренеров, организаторов мероприятий и любителей мотоспорта. Организация работает в тесном взаимодействии с муниципалитетом Геленджика, органами власти Краснодарского края и общественными спортивными структурами.
              </p>
              <p className="text-[#9e9e9e] leading-relaxed mb-10">
                Приоритеты: детский и юношеский спорт, безопасность на трассах, создание спортивной инфраструктуры, семейные мероприятия, событийный туризм и развитие Экстрим-парка Геленджик.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", title: "Официальный статус", desc: "Государственная регистрация" },
                  { icon: "Users", title: "Детский спорт", desc: "Секции с 5 лет" },
                  { icon: "ShieldCheck", title: "Безопасность", desc: "Стандарты и контроль" },
                  { icon: "Handshake", title: "При содействии", desc: "Официальные инстанции" },
                ].map(f => (
                  <div key={f.title} className="bg-[#1a1a1a] border border-white/5 rounded-sm p-4 hover:border-[#c8102e]/30 transition-colors">
                    <Icon name={f.icon} size={22} className="text-[#c8102e] mb-2" />
                    <div className="font-oswald text-white text-sm uppercase tracking-wide">{f.title}</div>
                    <div className="text-[#6b6b6b] text-xs mt-1">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-[#c8102e]/30" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-[#c8102e]/30" />
              <div className="bg-[#1a1a1a] border border-white/5 p-8 rounded-sm space-y-6">
                <div className="font-oswald text-2xl text-white uppercase tracking-wide">Миссия</div>
                <blockquote className="border-l-2 border-[#c8102e] pl-6 text-[#e8e8e8] text-lg leading-relaxed italic">
                  «Создание системной среды для развития безопасного экстрима, включая мотоциклетный и квадроциклетный спорт в России — от детских секций до международных соревнований»
                </blockquote>
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {[
                    "Развитие массового и детского спорта",
                    "Строительство спортивной инфраструктуры",
                    "Продвижение культуры безопасной езды",
                    "Событийный туризм и территориальное развитие",
                    "Взаимодействие с органами власти и партнёрами",
                  ].map(m => (
                    <div key={m} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#c8102e] rounded-full mt-2 shrink-0" />
                      <span className="text-[#9e9e9e] text-sm">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIRECTIONS ═══ */}
      <section id="directions" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="h-px w-10 bg-[#c8102e]" /></div>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Направления деятельности</h2>
            <p className="text-[#6b6b6b] mt-4 max-w-xl mx-auto text-sm">Организация охватывает все ключевые дисциплины мотоциклетного и квадроциклетного спорта</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {DIRECTIONS.map((d) => (
              <div key={d.title}
                className="bg-[#141414] border border-white/5 hover:border-[#c8102e]/40 p-5 rounded-sm group cursor-default transition-all duration-300 hover:bg-[#1a1a1a]">
                <div className="w-10 h-10 bg-[#c8102e]/10 group-hover:bg-[#c8102e]/20 rounded-sm flex items-center justify-center mb-4 transition-colors">
                  <Icon name={d.icon} size={20} className="text-[#c8102e]" />
                </div>
                <div className="font-oswald text-white text-sm uppercase tracking-wide mb-2">{d.title}</div>
                <p className="text-[#6b6b6b] text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALENDAR ═══ */}
      <section id="calendar" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="h-px w-12 bg-[#c8102e] mb-5" />
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Календарь мероприятий 2026</h2>
            <p className="text-[#9e9e9e] mt-4 max-w-2xl text-sm leading-relaxed">
              Календарь дополняется по мере утверждения и поступления информации.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div>
              <div className="text-[10px] text-[#6b6b6b] font-oswald uppercase tracking-wider mb-2">Статус</div>
              <div className="flex flex-wrap gap-2">
                {([["all", "Все"], ["own", "Организуем"], ["participate", "Участвуем"], ["plan", "Планируем"]] as const).map(([key, label]) => (
                  <button key={key} onClick={() => setFilterStatus(key)}
                    className={`text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-sm border transition-all ${
                      filterStatus === key
                        ? "bg-[#c8102e] border-[#c8102e] text-white"
                        : "border-white/10 text-[#9e9e9e] hover:border-white/30 hover:text-white"
                    }`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[#6b6b6b] font-oswald uppercase tracking-wider mb-2">Дисциплина</div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setFilterDiscipline("all")}
                  className={`text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-sm border transition-all ${
                    filterDiscipline === "all"
                      ? "bg-white text-black border-white"
                      : "border-white/10 text-[#9e9e9e] hover:border-white/30 hover:text-white"
                  }`}>
                  Все дисциплины
                </button>
                {(Object.keys(DISCIPLINE_LABELS) as EventDiscipline[]).map(key => (
                  <button key={key} onClick={() => setFilterDiscipline(key)}
                    className={`text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-sm border transition-all ${
                      filterDiscipline === key
                        ? "bg-white text-black border-white"
                        : "border-white/10 text-[#9e9e9e] hover:border-white/30 hover:text-white"
                    }`}>
                    {DISCIPLINE_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredEvents.map((ev, i) => (
              <div key={`${ev.title}-${i}`}
                className={`bg-[#141414] border p-5 rounded-sm transition-all group ${
                  ev.status === "own" ? "border-[#c8102e]/40 hover:border-[#c8102e]" : "border-white/5 hover:border-white/20"
                }`}>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className={`text-[10px] px-2 py-1 font-oswald uppercase tracking-wider rounded ${
                    ev.status === "own" ? "bg-[#c8102e] text-white" :
                    ev.status === "participate" ? "bg-white/10 text-[#e8e8e8]" :
                    "bg-[#c8102e]/10 text-[#c8102e]"
                  }`}>
                    {STATUS_LABELS[ev.status]}
                  </span>
                  <span className="text-[9px] text-[#6b6b6b] font-oswald uppercase tracking-wider">
                    {DISCIPLINE_LABELS[ev.discipline]}
                  </span>
                </div>
                <div className="font-oswald text-white text-sm uppercase tracking-wide mb-3 leading-tight group-hover:text-[#c8102e] transition-colors">
                  {ev.title}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={12} className="text-[#6b6b6b]" />
                    <span className="text-[#9e9e9e] text-xs">{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={12} className="text-[#6b6b6b]" />
                    <span className="text-[#6b6b6b] text-xs">{ev.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16 text-[#6b6b6b]">
              <Icon name="SearchX" size={32} className="mx-auto mb-3" />
              <div className="text-sm">По выбранным фильтрам событий не найдено</div>
            </div>
          )}

          <div className="mt-10 text-center">
            <button onClick={() => setActiveForm("event")}
              className="text-sm text-[#c8102e] border border-[#c8102e]/30 hover:border-[#c8102e] hover:bg-[#c8102e]/10 px-8 py-3 rounded-sm transition-all font-oswald uppercase tracking-wider">
              Подать заявку на участие
            </button>
          </div>
        </div>
      </section>

      {/* ═══ NEWS ═══ */}
      <section id="news" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Новости</h2>
            </div>
            <div className="text-[#c8102e] text-xs font-oswald uppercase tracking-wider hidden sm:block cursor-pointer hover:text-white transition-colors">
              Все новости →
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map(n => (
              <article key={n.title} className="bg-[#141414] border border-white/5 hover:border-[#c8102e]/30 rounded-sm overflow-hidden group transition-all cursor-pointer">
                <div className="h-0.5 bg-[#c8102e]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] bg-[#c8102e]/10 text-[#c8102e] px-2 py-1 font-oswald uppercase tracking-wider rounded">{n.tag}</span>
                    <span className="text-[#6b6b6b] text-xs">{n.date}</span>
                  </div>
                  <h3 className="font-oswald text-white text-sm uppercase tracking-wide group-hover:text-[#c8102e] transition-colors mb-3">{n.title}</h3>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{n.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#c8102e] text-xs font-oswald uppercase tracking-wider">
                    <span>Читать</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARK ═══ */}
      <section id="park" className="py-24 bg-[#0f0f0f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={PARK_IMG} alt="Экстрим-парк Геленджик" className="w-full rounded-sm object-cover h-96 lg:h-[500px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 to-transparent rounded-sm" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/10 p-4 rounded-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="MapPin" size={14} className="text-[#c8102e]" />
                    <span className="text-white text-xs font-oswald uppercase tracking-wider">Геленджик, Краснодарский край</span>
                  </div>
                  <div className="text-[#6b6b6b] text-xs">Многофункциональная спортивная площадка</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Экстрим-парк<br /><span className="text-[#c8102e]">Геленджик</span>
              </h2>
              <p className="text-[#9e9e9e] text-lg leading-relaxed mt-6 mb-6">
                Флагманский проект организации — создание многофункциональной спортивной площадки в Геленджике. Объект призван стать центром притяжения для спортсменов, туристов и семей с детьми.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: "Trophy", label: "Соревнования", desc: "Официальные старты регионального и федерального уровней" },
                  { icon: "GraduationCap", label: "Обучение", desc: "Детские секции, школы вождения, тренировки для взрослых" },
                  { icon: "Users", label: "Семейный отдых", desc: "Открытые тренировки и семейные мероприятия выходного дня" },
                  { icon: "TrendingUp", label: "Туризм и инвестиции", desc: "Событийный туризм, развитие территории, привлечение партнёров" },
                  { icon: "Building2", label: "Инфраструктура", desc: "Трассы, зрительские зоны, сервисные и технические объекты" },
                ].map(f => (
                  <div key={f.label} className="flex items-start gap-4 bg-[#141414] border border-white/5 hover:border-[#c8102e]/30 p-4 rounded-sm transition-all">
                    <div className="w-9 h-9 bg-[#c8102e]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Icon name={f.icon} size={18} className="text-[#c8102e]" />
                    </div>
                    <div>
                      <div className="font-oswald text-white text-sm uppercase tracking-wide">{f.label}</div>
                      <div className="text-[#6b6b6b] text-xs mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setActiveForm("park")}
                className="bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all hover:scale-105">
                Связаться по проекту
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KIDS / SAFETY ═══ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Детский спорт<br />и безопасность
              </h2>
              <p className="text-[#9e9e9e] text-lg leading-relaxed mt-6 mb-6">
                Одно из ключевых направлений организации — развитие детско-юношеского мотоспорта. Мы создаём безопасную профессиональную среду, где дети с 5 лет могут начать спортивный путь под руководством опытных тренеров.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "ShieldCheck", title: "Безопасность", desc: "Сертифицированное снаряжение и инструкторы" },
                  { icon: "Baby", title: "От 5 лет", desc: "Программы для самых маленьких" },
                  { icon: "Award", title: "Соревнования", desc: "Детские турниры и первенства" },
                  { icon: "Heart", title: "Семья", desc: "Семейные старты и тренировки" },
                ].map(f => (
                  <div key={f.title} className="bg-[#141414] border border-white/5 p-4 rounded-sm hover:border-[#c8102e]/30 transition-colors">
                    <Icon name={f.icon} size={20} className="text-[#c8102e] mb-2" />
                    <div className="font-oswald text-white text-sm uppercase tracking-wide">{f.title}</div>
                    <div className="text-[#6b6b6b] text-xs mt-1">{f.desc}</div>
                  </div>
                ))}
              </div>
              <button onClick={() => setActiveForm("member")}
                className="border border-[#c8102e] text-[#c8102e] hover:bg-[#c8102e] hover:text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all">
                Записать ребёнка
              </button>
            </div>
            <div className="relative">
              <img src={KIDS_IMG} alt="Детский мотоспорт — обучение" className="w-full rounded-sm object-cover h-96 lg:h-[480px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DOCS ═══ */}
      <section id="docs" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="h-px w-12 bg-[#c8102e] mb-5" />
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Документы</h2>
            <p className="text-[#9e9e9e] mt-4 max-w-2xl text-sm leading-relaxed">
              Официальные документы организации (устав, свидетельство о регистрации, положения, регламенты, формы заявок) <span className="text-white font-medium">готовы предоставить по запросу</span>. Отправьте заявку через форму или напишите нам на почту.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start">
            <div className="bg-[#141414] border border-white/5 rounded-sm p-8">
              <div className="font-oswald text-xs text-[#c8102e] uppercase tracking-widest mb-4">Перечень документов</div>
              <div className="space-y-3">
                {DOCS_AVAILABLE.map(doc => (
                  <div key={doc.title} className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
                    <Icon name={doc.icon} fallback="FileText" size={16} className="text-[#c8102e] shrink-0" />
                    <span className="text-[#e8e8e8] text-sm">{doc.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#c8102e]/10 to-[#141414] border border-[#c8102e]/30 rounded-sm p-8">
              <Icon name="FileSearch" fallback="FileText" size={28} className="text-[#c8102e] mb-4" />
              <div className="font-oswald text-xl text-white uppercase tracking-wide mb-3">Запросить документы</div>
              <p className="text-[#9e9e9e] text-sm leading-relaxed mb-6">
                Если вам необходимы официальные документы организации — отправьте запрос. Мы оперативно предоставим все необходимые материалы.
              </p>
              <div className="space-y-3">
                <button onClick={() => setActiveForm("question")}
                  className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-6 py-4 transition-all">
                  Запросить документы
                </button>
                <a href="mailto:albert@av-prod.ru"
                  className="w-full block text-center border border-white/20 hover:border-white text-white font-oswald uppercase tracking-widest text-xs px-6 py-3 transition-all">
                  albert@av-prod.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section id="partners" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Партнёры</h2>
              <p className="text-[#9e9e9e] mt-6 mb-8 leading-relaxed">
                Мы открыты к сотрудничеству с органами власти, государственными структурами, бизнесом, брендами, медиа и общественными организациями.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {PARTNERS.map((p) => (
                  <div key={p} className="bg-[#141414] border border-white/5 h-16 rounded-sm flex items-center justify-center text-center px-3 text-[#9e9e9e] text-[11px] font-oswald uppercase tracking-wider hover:border-[#c8102e]/30 hover:text-white transition-all">
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Для партнёров<br />и инвесторов
              </h2>
              <p className="text-[#9e9e9e] mt-6 mb-6 leading-relaxed">
                Организация предлагает партнёрам и инвесторам возможности для участия в развитии мотоспорта, событийного туризма и спортивной инфраструктуры Геленджика.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Брендинг на мероприятиях и трассах",
                  "Соинвестирование в объекты Экстрим-парка",
                  "Совместные PR и медиапроекты",
                  "Участие в грантовых программах",
                  "Взаимодействие с органами власти",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#c8102e] rounded-full shrink-0" />
                    <span className="text-[#9e9e9e] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setActiveForm("partner")}
                  className="bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-6 py-3 transition-all">
                  Стать партнёром
                </button>
                <button onClick={() => setActiveForm("question")}
                  className="border border-white/20 hover:border-white text-white font-oswald uppercase tracking-widest text-sm px-6 py-3 transition-all">
                  Запросить презентацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACTS ═══ */}
      <section id="contacts" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Контакты</h2>
              <p className="text-[#9e9e9e] mt-6 mb-10 leading-relaxed">
                Организация открыта для всех — спортсменов, родителей, организаций, инвесторов и партнёров.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "MapPin", label: "Адрес", value: "353460, Россия, Краснодарский край,\nг. Геленджик, ул. Тельмана, д. 146, помещ. 3" },
                  { icon: "Mail", label: "Email", value: "albert@av-prod.ru" },
                  { icon: "Phone", label: "Телефон", value: "+7 (926) 841-75-25" },
                  { icon: "User", label: "Президент", value: "Петросян Альберт Тигранович" },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c8102e]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={18} className="text-[#c8102e]" />
                    </div>
                    <div>
                      <div className="text-[#6b6b6b] text-xs font-oswald uppercase tracking-wider">{c.label}</div>
                      {c.label === "Email" ? (
                        <a href={`mailto:${c.value}`} className="text-white text-sm mt-0.5 hover:text-[#c8102e] transition-colors block">{c.value}</a>
                      ) : c.label === "Телефон" ? (
                        <a href="tel:+79268417525" className="text-white text-sm mt-0.5 hover:text-[#c8102e] transition-colors block">{c.value}</a>
                      ) : (
                        <div className="text-white text-sm mt-0.5 whitespace-pre-line">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-[#141414] border border-white/5 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-oswald text-xs text-white uppercase tracking-wider">Реквизиты НКО «ФМКСГ»</div>
                  <span className="text-[9px] text-[#6b6b6b] font-oswald uppercase tracking-wider">Официально</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#9e9e9e] font-mono leading-relaxed">
                  <div><span className="text-[#6b6b6b]">ОГРН:</span> 1232300040939 от 14.07.2023</div>
                  <div><span className="text-[#6b6b6b]">ИНН / КПП:</span> 2304081076 / 230401001</div>
                  <div className="pt-2 border-t border-white/5 mt-2"><span className="text-[#6b6b6b]">Р/с:</span> 40703810010701000006</div>
                  <div><span className="text-[#6b6b6b]">Банк:</span> Филиал «ЦЕНТРАЛЬНЫЙ» Банка ВТБ (ПАО)</div>
                  <div><span className="text-[#6b6b6b]">БИК:</span> 044525411</div>
                  <div><span className="text-[#6b6b6b]">К/с:</span> 30101810145250000411</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {(Object.keys(formTitles) as string[]).map(formKey => (
                  <button key={formKey} onClick={() => setActiveForm(formKey)}
                    className="border border-white/10 hover:border-[#c8102e]/50 hover:text-[#c8102e] text-[#9e9e9e] text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-sm transition-all">
                    {formTitles[formKey]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-oswald text-xl text-white uppercase tracking-wider mb-6">Написать нам</div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#6b6b6b] font-oswald uppercase tracking-wider block mb-2">Имя *</label>
                    <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Ваше имя"
                      className="w-full bg-[#141414] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#3a3a3a]" />
                  </div>
                  <div>
                    <label className="text-xs text-[#6b6b6b] font-oswald uppercase tracking-wider block mb-2">Телефон</label>
                    <input value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-[#141414] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#3a3a3a]" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#6b6b6b] font-oswald uppercase tracking-wider block mb-2">Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-[#141414] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#3a3a3a]" />
                </div>
                <div>
                  <label className="text-xs text-[#6b6b6b] font-oswald uppercase tracking-wider block mb-2">Сообщение</label>
                  <textarea value={formData.comment} onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                    placeholder="Расскажите о вашем запросе..." rows={4}
                    className="w-full bg-[#141414] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors resize-none placeholder:text-[#3a3a3a]" />
                </div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" required checked={formData.agree} onChange={e => setFormData(p => ({ ...p, agree: e.target.checked }))}
                    className="mt-1 accent-[#c8102e]" />
                  <span className="text-[#6b6b6b] text-xs leading-relaxed group-hover:text-[#9e9e9e] transition-colors">
                    Я согласен(на) на обработку персональных данных в соответствии с политикой конфиденциальности организации
                  </span>
                </label>
                <button type="submit"
                  className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm py-4 transition-all hover:scale-[1.01]">
                  {formSent ? "Заявка отправлена ✓" : "Отправить заявку"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#060606] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <img src={LOGO} alt="ФМКСГ — общественная организация мотоциклетного и квадроциклетного спорта" className="h-10 w-auto object-contain mb-5" />
              <p className="text-[#6b6b6b] text-xs leading-relaxed">
                Официальная общественная организация по развитию мотоциклетного и квадроциклетного спорта. Геленджик, Краснодарский край.
              </p>
            </div>
            <div>
              <div className="font-oswald text-xs text-white uppercase tracking-widest mb-4">Навигация</div>
              <div className="space-y-2">
                {NAV_ITEMS.slice(0, 5).map(item => (
                  <button key={item.id} onClick={() => scrollTo(item.id)}
                    className="block text-[#6b6b6b] hover:text-[#c8102e] text-xs transition-colors">{item.label}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-oswald text-xs text-white uppercase tracking-widest mb-4">Разделы</div>
              <div className="space-y-2">
                {NAV_ITEMS.slice(5).map(item => (
                  <button key={item.id} onClick={() => scrollTo(item.id)}
                    className="block text-[#6b6b6b] hover:text-[#c8102e] text-xs transition-colors">{item.label}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="font-oswald text-xs text-white uppercase tracking-widest mb-4">Контакты</div>
              <div className="space-y-2 text-[#6b6b6b] text-xs leading-relaxed">
                <div>г. Геленджик, ул. Тельмана, 146, пом. 3</div>
                <a href="mailto:albert@av-prod.ru" className="block hover:text-[#c8102e] transition-colors">albert@av-prod.ru</a>
                <a href="tel:+79268417525" className="block hover:text-[#c8102e] transition-colors">+7 (926) 841-75-25</a>
                <div className="pt-2 text-[#3a3a3a]">ОГРН 1232300040939<br />ИНН 2304081076</div>
              </div>
              <div className="mt-4 flex gap-3">
                <div className="w-8 h-8 border border-white/10 hover:border-[#c8102e] rounded-sm flex items-center justify-center cursor-pointer transition-colors group">
                  <Icon name="Send" size={14} className="text-[#6b6b6b] group-hover:text-[#c8102e] transition-colors" />
                </div>
                <div className="w-8 h-8 border border-white/10 hover:border-[#c8102e] rounded-sm flex items-center justify-center cursor-pointer transition-colors group">
                  <Icon name="Youtube" fallback="Video" size={14} className="text-[#6b6b6b] group-hover:text-[#c8102e] transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[#3a3a3a] text-xs text-center sm:text-left">
              © 2023—2026 Геленджикская городская общественная организация<br />«Федерация мотоциклетного и квадроциклетного спорта» (НКО «ФМКСГ»)
            </div>
            <div className="flex gap-4 text-[#3a3a3a] text-xs">
              <span className="hover:text-[#6b6b6b] cursor-pointer transition-colors">Политика конфиденциальности</span>
              <span className="hover:text-[#6b6b6b] cursor-pointer transition-colors">Реквизиты</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ MODAL FORM ═══ */}
      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setActiveForm(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-[#141414] border border-white/10 rounded-sm p-8 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="h-0.5 bg-[#c8102e] absolute top-0 left-0 right-0 rounded-t-sm" />
            <button onClick={() => setActiveForm(null)} className="absolute top-4 right-4 text-[#6b6b6b] hover:text-white transition-colors">
              <Icon name="X" size={20} />
            </button>
            <h3 className="font-oswald text-xl text-white uppercase tracking-wider mb-6 mt-2">{formTitles[activeForm]}</h3>
            {formSent ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} className="text-[#c8102e] mx-auto mb-4" />
                <div className="font-oswald text-white text-lg uppercase tracking-wider">Заявка отправлена!</div>
                <p className="text-[#6b6b6b] text-sm mt-2">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="Имя *"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#3a3a3a]" />
                <input value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  placeholder="Телефон"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#3a3a3a]" />
                <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="Email *"
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors placeholder:text-[#3a3a3a]" />
                <textarea value={formData.comment} onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                  placeholder="Комментарий" rows={3}
                  className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#c8102e] text-white text-sm px-4 py-3 rounded-sm outline-none transition-colors resize-none placeholder:text-[#3a3a3a]" />
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required checked={formData.agree} onChange={e => setFormData(p => ({ ...p, agree: e.target.checked }))}
                    className="mt-1 accent-[#c8102e]" />
                  <span className="text-[#6b6b6b] text-xs leading-relaxed">Согласен(на) на обработку персональных данных</span>
                </label>
                <button type="submit"
                  className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm py-4 transition-all">
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}