import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/9f10a707-7aa7-457a-861f-084d7ccc2369.jpg";
const PARK_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/f0f5d117-f9db-4016-a721-d62ddfab4368.jpg";
const KIDS_IMG = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/files/e683d7f4-1c4e-4c53-a668-52628cc0a6cb.jpg";
const LOGO = "https://cdn.poehali.dev/projects/5677d6d2-a4f7-4a68-86b2-fdefc661cf12/bucket/79efd1ce-1753-462d-8110-f090acd91938.png";

const NAV_ITEMS = [
  { id: "about", label: "О федерации" },
  { id: "directions", label: "Направления" },
  { id: "calendar", label: "Календарь" },
  { id: "news", label: "Новости" },
  { id: "park", label: "Экстрим-парк" },
  { id: "docs", label: "Документы" },
  { id: "partners", label: "Партнёры" },
  { id: "contacts", label: "Контакты" },
];

const DIRECTIONS = [
  { icon: "Bike", title: "Эндуро", desc: "Кросс-кантри по бездорожью и труднопроходимым маршрутам — спорт высоких скоростей и технической выносливости." },
  { icon: "Mountain", title: "Тур-эндуро", desc: "Многодневные маршрутные соревнования на выносливость по живописным природным территориям." },
  { icon: "Compass", title: "Adventure", desc: "Дальние путешествия на мотоцикле — сочетание спорта, туризма и открытий." },
  { icon: "Map", title: "Мототуризм", desc: "Организация маршрутных мотопробегов, туров и клубных поездок с соблюдением стандартов безопасности." },
  { icon: "RotateCcw", title: "Мотоджимхана", desc: "Фигурное вождение на закрытых площадках — дисциплина точности, концентрации и мастерства." },
  { icon: "Tractor", title: "Квадроциклетный спорт", desc: "Соревнования и тренировки на квадроциклах: кросс, эндуро, ориентирование по трассе." },
  { icon: "Users", title: "Детский и юношеский спорт", desc: "Тренировки, школы и соревнования для детей от 5 лет. Безопасная среда, профессиональные инструкторы." },
  { icon: "GraduationCap", title: "Обучение и безопасность", desc: "Курсы и мастер-классы по технике езды, правилам безопасной эксплуатации мототехники." },
  { icon: "Trophy", title: "Массовые мероприятия", desc: "Открытые старты, семейные заезды, фестивали мотокультуры и благотворительные пробеги." },
  { icon: "Building2", title: "Инфраструктурные проекты", desc: "Создание и развитие спортивных объектов, трасс, технических центров и учебных площадок." },
];

const EVENTS_OWN = [
  { date: "Май 2026", title: "Открытый чемпионат по эндуро", place: "Геленджик, Экстрим-парк", status: "plan" },
  { date: "Июнь 2026", title: "Детские соревнования «Первый старт»", place: "Геленджик, Экстрим-парк", status: "plan" },
  { date: "Июль 2026", title: "Фестиваль мототуризма", place: "Краснодарский край", status: "plan" },
  { date: "Август 2026", title: "Мотоджимхана — открытый старт", place: "Геленджик", status: "plan" },
  { date: "Сентябрь 2026", title: "Краевые соревнования по квадроциклетному спорту", place: "КК / ЮФО", status: "plan" },
];

const EVENTS_PARTICIPATE = [
  { date: "Апрель 2026", title: "Форум «Спорт и туризм ЮФО»", place: "Краснодар" },
  { date: "Июнь 2026", title: "Всероссийские соревнования по эндуро", place: "Россия" },
  { date: "Октябрь 2026", title: "Выставка «Моторный спорт — Россия»", place: "Москва" },
];

const NEWS = [
  { date: "Март 2026", tag: "Организация", title: "Федерация прошла государственную регистрацию", excerpt: "Завершена официальная регистрация Федерации мотоциклетного и квадроциклетного спорта. Организация готова к полноценной деятельности." },
  { date: "Март 2026", tag: "Экстрим-парк", title: "Начата подготовка площадки Экстрим-парка в Геленджике", excerpt: "Стартовали проектные работы по созданию многофункциональной спортивной площадки в Геленджике." },
  { date: "Апрель 2026", tag: "Детский спорт", title: "Открыт набор в детскую секцию мотоспорта", excerpt: "Объявляется набор детей от 5 лет в школу мотоспорта. Занятия пройдут на специализированной трассе под руководством сертифицированных тренеров." },
];

const DOCS = [
  { icon: "FileText", title: "Свидетельство о регистрации", desc: "Официальный документ государственной регистрации организации" },
  { icon: "FileText", title: "Устав федерации", desc: "Основной документ, определяющий цели, задачи и порядок деятельности" },
  { icon: "Shield", title: "Политика конфиденциальности", desc: "Условия обработки персональных данных пользователей сайта" },
  { icon: "CheckSquare", title: "Согласие на обработку ПД", desc: "Форма согласия на обработку персональных данных" },
  { icon: "ClipboardList", title: "Положения о мероприятиях", desc: "Регламенты и положения для проводимых соревнований и событий" },
  { icon: "Download", title: "Формы заявок", desc: "Бланки для участия в мероприятиях и вступления в федерацию" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", comment: "", agree: false });
  const [formSent, setFormSent] = useState(false);

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
    member: "Стать участником федерации",
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
            <img src={LOGO} alt="Федерация мотоциклетного и квадроциклетного спорта" className="h-8 sm:h-10 w-auto object-contain transition-opacity group-hover:opacity-80" />
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
              Вступить в федерацию
            </button>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Мотоспорт — Федерация" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#c8102e]" />
              <span className="text-[#c8102e] font-oswald tracking-[0.2em] uppercase text-xs">Геленджик · Краснодарский край · ЮФО</span>
            </div>

            <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight mb-6">
              Федерация<br />
              <span className="text-[#c8102e]">мотоциклетного</span><br />
              и квадроциклетного<br />
              спорта
            </h1>

            <p className="text-lg sm:text-xl text-[#e8e8e8]/80 mb-8 max-w-xl leading-relaxed font-golos">
              Официальная организация по развитию мотоспорта, безопасного вождения, детских соревнований и спортивной инфраструктуры в Краснодарском крае.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("about")}
                className="bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:scale-105">
                О федерации
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
                { num: "2026", label: "год основания" },
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
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">О федерации</h2>
              <p className="text-[#9e9e9e] text-lg leading-relaxed mt-6 mb-5">
                Федерация мотоциклетного и квадроциклетного спорта — официально зарегистрированная общественная организация, созданная для системного развития мотоспорта в Геленджике, Краснодарском крае и ЮФО.
              </p>
              <p className="text-[#9e9e9e] leading-relaxed mb-5">
                Мы объединяем спортсменов, тренеров, организаторов мероприятий и любителей мотоспорта. Организация работает в тесном взаимодействии с органами власти, Министерством спорта, федеральными и региональными федерациями, муниципалитетом Геленджика.
              </p>
              <p className="text-[#9e9e9e] leading-relaxed mb-10">
                Приоритеты: развитие детско-юношеского спорта, безопасность на трассах, создание спортивной инфраструктуры, событийный туризм и привлечение инвестиций в регион.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", title: "Официальный статус", desc: "Государственная регистрация" },
                  { icon: "Users", title: "Детский спорт", desc: "Секции с 5 лет" },
                  { icon: "ShieldCheck", title: "Безопасность", desc: "Стандарты и контроль" },
                  { icon: "Handshake", title: "Партнёрство", desc: "Власть, бизнес, федерации" },
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
                  «Создать системную среду для развития мотоциклетного и квадроциклетного спорта в России — от детских секций до международных соревнований»
                </blockquote>
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {[
                    "Развитие массового и детского спорта",
                    "Строительство спортивной инфраструктуры",
                    "Продвижение культуры безопасной езды",
                    "Событийный туризм и территориальное развитие",
                    "Взаимодействие с властью и федерациями",
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
            <p className="text-[#6b6b6b] mt-4 max-w-xl mx-auto text-sm">Федерация охватывает все ключевые дисциплины мотоциклетного и квадроциклетного спорта</p>
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
          <div className="mb-14">
            <div className="h-px w-12 bg-[#c8102e] mb-5" />
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Календарь мероприятий 2026</h2>
            <p className="text-[#6b6b6b] mt-4 max-w-lg text-sm">Список мероприятий постоянно дополняется. Следите за обновлениями.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#c8102e] rounded-full" />
                <div className="font-oswald text-base uppercase tracking-wider text-white">Организуем</div>
              </div>
              <div className="space-y-3">
                {EVENTS_OWN.map(ev => (
                  <div key={ev.title} className="bg-[#141414] border border-white/5 hover:border-[#c8102e]/30 p-4 rounded-sm transition-all flex gap-4 group">
                    <div className="shrink-0 w-20">
                      <div className="font-oswald text-[#c8102e] text-xs uppercase tracking-wider">{ev.date}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-oswald text-white text-sm uppercase tracking-wide group-hover:text-[#c8102e] transition-colors">{ev.title}</div>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Icon name="MapPin" size={12} className="text-[#6b6b6b]" />
                        <span className="text-[#6b6b6b] text-xs">{ev.place}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="text-[10px] bg-[#c8102e]/10 text-[#c8102e] px-2 py-0.5 rounded font-oswald uppercase tracking-wider">Планируем</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#6b6b6b] rounded-full" />
                <div className="font-oswald text-base uppercase tracking-wider text-white">Участвуем</div>
              </div>
              <div className="space-y-3">
                {EVENTS_PARTICIPATE.map(ev => (
                  <div key={ev.title} className="bg-[#141414] border border-white/5 hover:border-white/20 p-4 rounded-sm transition-all flex gap-4 group">
                    <div className="shrink-0 w-20">
                      <div className="font-oswald text-[#6b6b6b] text-xs uppercase tracking-wider">{ev.date}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-oswald text-[#e8e8e8] text-sm uppercase tracking-wide">{ev.title}</div>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Icon name="MapPin" size={12} className="text-[#6b6b6b]" />
                        <span className="text-[#6b6b6b] text-xs">{ev.place}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="text-[10px] bg-white/5 text-[#9e9e9e] px-2 py-0.5 rounded font-oswald uppercase tracking-wider">Участие</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 border border-dashed border-white/10 rounded-sm text-center">
                <Icon name="Calendar" size={20} className="text-[#6b6b6b] mx-auto mb-2" />
                <p className="text-[#6b6b6b] text-xs">Список мероприятий дополняется.<br />Подайте заявку на участие заранее.</p>
                <button onClick={() => setActiveForm("event")}
                  className="mt-3 text-xs text-[#c8102e] border border-[#c8102e]/30 hover:border-[#c8102e] px-4 py-2 rounded transition-colors font-oswald uppercase tracking-wider">
                  Подать заявку
                </button>
              </div>
            </div>
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
                Флагманский проект федерации — создание многофункциональной спортивной площадки в Геленджике. Объект призван стать центром притяжения для спортсменов, туристов и семей с детьми.
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
                Одно из ключевых направлений федерации — развитие детско-юношеского мотоспорта. Мы создаём безопасную профессиональную среду, где дети с 5 лет могут начать спортивный путь под руководством опытных тренеров.
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
            <p className="text-[#6b6b6b] mt-4 max-w-lg text-sm">Официальные документы, регламенты, формы заявок и нормативная база федерации</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCS.map(doc => (
              <div key={doc.title} className="bg-[#141414] border border-white/5 hover:border-[#c8102e]/30 p-5 rounded-sm group cursor-pointer transition-all flex items-start gap-4">
                <div className="w-10 h-10 bg-[#c8102e]/10 group-hover:bg-[#c8102e]/20 rounded-sm flex items-center justify-center shrink-0 transition-colors">
                  <Icon name={doc.icon} size={20} className="text-[#c8102e]" />
                </div>
                <div>
                  <div className="font-oswald text-white text-sm uppercase tracking-wide group-hover:text-[#c8102e] transition-colors">{doc.title}</div>
                  <div className="text-[#6b6b6b] text-xs mt-1 leading-relaxed">{doc.desc}</div>
                  <div className="mt-2 text-[10px] text-[#c8102e] font-oswald uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Скачать →</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 border border-dashed border-white/10 rounded-sm text-center">
            <p className="text-[#6b6b6b] text-sm">Не нашли нужный документ? Запросите его напрямую.</p>
            <button onClick={() => setActiveForm("question")}
              className="mt-3 text-sm text-[#c8102e] border border-[#c8102e]/30 hover:border-[#c8102e] px-6 py-2 rounded transition-colors font-oswald uppercase tracking-wider">
              Задать вопрос
            </button>
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
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-[#141414] border border-white/5 h-20 rounded-sm flex items-center justify-center text-[#3a3a3a] text-xs font-oswald uppercase tracking-wider hover:border-white/10 transition-colors">
                    Партнёр {i + 1}
                  </div>
                ))}
              </div>
              <p className="text-[#3a3a3a] text-xs">Логотипы партнёров будут размещены после согласования</p>
            </div>

            <div>
              <div className="h-px w-12 bg-[#c8102e] mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Для партнёров<br />и инвесторов
              </h2>
              <p className="text-[#9e9e9e] mt-6 mb-6 leading-relaxed">
                Федерация предлагает партнёрам и инвесторам возможности для участия в развитии мотоспорта, событийного туризма и спортивной инфраструктуры Геленджика.
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
                Федерация открыта для всех — спортсменов, родителей, организаций, инвесторов и партнёров.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "MapPin", label: "Адрес", value: "г. Геленджик, Краснодарский край" },
                  { icon: "Mail", label: "Email", value: "info@[укажите домен]" },
                  { icon: "Phone", label: "Телефон", value: "+7 (___) ___-__-__" },
                  { icon: "Globe", label: "Регион", value: "Краснодарский край · ЮФО · Россия" },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#c8102e]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={18} className="text-[#c8102e]" />
                    </div>
                    <div>
                      <div className="text-[#6b6b6b] text-xs font-oswald uppercase tracking-wider">{c.label}</div>
                      <div className="text-white text-sm mt-0.5">{c.value}</div>
                    </div>
                  </div>
                ))}
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
                    Я согласен(на) на обработку персональных данных в соответствии с политикой конфиденциальности федерации
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
              <img src={LOGO} alt="Федерация мотоциклетного и квадроциклетного спорта" className="h-10 w-auto object-contain mb-5" />
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
              <div className="space-y-2 text-[#6b6b6b] text-xs">
                <div>г. Геленджик, КК</div>
                <div>info@[домен]</div>
                <div>+7 (___) ___-__-__</div>
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
            <div className="text-[#3a3a3a] text-xs">
              © 2026 Федерация мотоциклетного и квадроциклетного спорта. Все права защищены.
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