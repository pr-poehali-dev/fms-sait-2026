import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  HERO_IMG,
  LOGO,
  NAV_ITEMS,
  DISCIPLINES,
  EVENTS_2026,
  DISCIPLINE_LABELS,
  STATUS_LABELS,
  scrollTo,
} from "./data";
import type { EventStatus, EventDiscipline } from "./data";

interface HeroAboutSectionsProps {
  onOpenForm: (key: string) => void;
}

function HeroAboutSections({ onOpenForm }: HeroAboutSectionsProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<"all" | EventStatus>("all");
  const [filterDiscipline, setFilterDiscipline] = useState<"all" | EventDiscipline>("all");

  const filteredEvents = EVENTS_2026.filter(e =>
    (filterStatus === "all" || e.status === filterStatus) &&
    (filterDiscipline === "all" || e.discipline === filterDiscipline)
  );

  return (
    <>
      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c1220]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center group">
            <img
              src={LOGO}
              alt="ФМКСК — Краснодарская краевая федерация"
              className="h-8 sm:h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-5">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs text-[#8b9bb5] hover:text-white transition-colors font-golos tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenForm("member")}
              className="hidden sm:flex bg-[#e87722] hover:bg-[#cc6619] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors font-oswald tracking-wider uppercase"
            >
              Вступить
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#111827] border-t border-white/10 px-4 py-4">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                className="block w-full text-left py-3 text-[#e8e8e8] border-b border-white/5 text-sm font-golos tracking-wide last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onOpenForm("member"); setMenuOpen(false); }}
              className="mt-4 w-full bg-[#e87722] text-white py-3 font-oswald tracking-wider uppercase text-sm rounded-lg"
            >
              Вступить в федерацию
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Мотоспорт Краснодарского края — ФМКСК" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1220]/70 via-[#0c1220]/50 to-[#0c1220]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1220]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 w-full">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            {/* LEFT — text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-14 bg-[#e87722] rounded-full" />
                <span className="text-[#e87722] font-oswald tracking-[0.2em] uppercase text-xs">
                  Краснодарская краевая · ОГРН 1232300040950
                </span>
              </div>

              <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight mb-4">
                Общественная<br />
                организация<br />
                <span className="text-[#e87722]">мотоциклетного</span><br />
                и квадроциклетного<br />
                спорта
              </h1>

              <p className="font-oswald text-2xl sm:text-3xl text-white/50 uppercase tracking-wide mb-8">
                Краснодарский край
              </p>

              <p className="text-lg sm:text-xl text-[#e8e8e8]/80 mb-8 max-w-xl leading-relaxed font-golos">
                Краснодарская краевая общественная организация. Координация и развитие массового, детского и юношеского мотоспорта, спортивной инфраструктуры и безопасного вождения на территории Краснодарского края.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenForm("member")}
                  className="bg-[#e87722] hover:bg-[#cc6619] text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Вступить в федерацию
                </button>
                <button
                  onClick={() => scrollTo("infrastructure")}
                  className="border border-white/30 hover:border-white text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5"
                >
                  Инфраструктура
                </button>
                <button
                  onClick={() => onOpenForm("partner")}
                  className="border border-[#e87722]/50 hover:border-[#e87722] text-[#e87722] font-oswald uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-200 hover:bg-[#e87722]/10"
                >
                  Стать партнёром
                </button>
              </div>
            </div>

            {/* RIGHT — stats card (desktop) */}
            <div className="hidden lg:block">
              <div className="bg-[#161f2e]/90 backdrop-blur-sm border border-white/10 rounded-lg p-8 space-y-8">
                {[
                  { num: "10+", label: "дисциплин спорта" },
                  { num: "2023", label: "год основания" },
                  { num: "КК / ЮФО", label: "зона деятельности" },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-5">
                    <div className="font-oswald text-4xl text-[#e87722] font-bold leading-none min-w-[80px]">
                      {s.num}
                    </div>
                    <div className="h-10 w-px bg-white/10" />
                    <div className="text-[#8b9bb5] text-sm tracking-wide font-golos">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats — mobile fallback */}
          <div className="lg:hidden mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { num: "10+", label: "дисциплин" },
              { num: "2023", label: "год основания" },
              { num: "КК / ЮФО", label: "зона деятельности" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-oswald text-3xl text-[#e87722] font-bold">{s.num}</div>
                <div className="text-[#8b9bb5] text-xs tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/40 hover:text-white transition-colors"
        >
          <Icon name="ChevronDown" size={32} />
        </button>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT — mission card */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-[#e87722]/30 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-[#e87722]/30 rounded-br-lg" />
              <div className="bg-[#161f2e] border border-white/5 p-8 rounded-lg space-y-6">
                <div className="font-oswald text-2xl text-white uppercase tracking-wide">Миссия</div>
                <blockquote className="border-l-2 border-[#e87722] pl-6 text-[#e8e8e8] text-lg leading-relaxed italic">
                  «Создание системной среды для развития безопасного экстрима, включая мотоциклетный и квадроциклетный спорт на территории Краснодарского края — от детских секций до чемпионатов федерального уровня»
                </blockquote>
                <div className="space-y-3 pt-4 border-t border-white/10">
                  {[
                    "Координация спортивной деятельности в крае",
                    "Развитие массового и детско-юношеского спорта",
                    "Строительство и модернизация инфраструктуры",
                    "Продвижение культуры безопасной езды",
                    "Событийный туризм и территориальное развитие",
                    "Межрегиональное взаимодействие и партнёрства",
                  ].map(m => (
                    <div key={m} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#e87722] rounded-full mt-2 shrink-0" />
                      <span className="text-[#8b9bb5] text-sm">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — text + features */}
            <div>
              <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                О федерации
              </h2>
              <p className="text-[#8b9bb5] text-lg leading-relaxed mt-6 mb-5">
                Краснодарская краевая общественная организация «Федерация мотоциклетного и квадроциклетного спорта» (НКО «ФМКСК», ОГРН 1232300040950) зарегистрирована 14.07.2023 для системной координации и развития мотоспорта на территории Краснодарского края.
              </p>
              <p className="text-[#8b9bb5] leading-relaxed mb-5">
                Федерация объединяет спортсменов, тренеров, организаторов мероприятий и любителей мотоспорта всего региона. ФМКСК координирует спортивную деятельность на краевом уровне, взаимодействует с органами власти, муниципальными образованиями и общественными спортивными структурами.
              </p>
              <p className="text-[#8b9bb5] leading-relaxed mb-10">
                Приоритеты: краевой календарь соревнований, детско-юношеский спорт, стандарты безопасности, модернизация спортивной инфраструктуры, межрегиональное сотрудничество и событийный туризм.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", title: "Краевой статус", desc: "Координация по всему КК" },
                  { icon: "Users", title: "Детский спорт", desc: "Секции с 5 лет" },
                  { icon: "ShieldCheck", title: "Безопасность", desc: "Единые стандарты края" },
                  { icon: "Handshake", title: "Взаимодействие", desc: "Власть, бизнес, федерации" },
                ].map(f => (
                  <div key={f.title} className="bg-[#161f2e] border border-white/5 rounded-lg p-4 hover:border-[#e87722]/30 transition-colors">
                    <Icon name={f.icon} size={22} className="text-[#e87722] mb-2" />
                    <div className="font-oswald text-white text-sm uppercase tracking-wide">{f.title}</div>
                    <div className="text-[#6b7a8d] text-xs mt-1">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCIPLINES ── */}
      <section id="disciplines" className="py-24 bg-[#0c1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-14 bg-[#e87722] rounded-full" />
            </div>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Спортивные направления
            </h2>
            <p className="text-[#6b7a8d] mt-4 max-w-xl mx-auto text-sm">
              Федерация координирует все ключевые дисциплины мотоциклетного и квадроциклетного спорта на территории Краснодарского края
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            {DISCIPLINES.map(d => (
              <div
                key={d.title}
                className="bg-[#161f2e] border border-white/5 hover:border-[#e87722]/40 rounded-lg group cursor-default transition-all duration-300 hover:bg-[#1a2638] flex items-start gap-5 p-6"
              >
                <div className="w-12 h-12 bg-[#e87722]/10 group-hover:bg-[#e87722]/20 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                  <Icon name={d.icon} size={22} className="text-[#e87722]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-oswald text-white text-sm uppercase tracking-wide mb-2">{d.title}</div>
                  <p className="text-[#6b7a8d] text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALENDAR ── */}
      <section id="calendar" className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Спортивный календарь 2026
            </h2>
            <p className="text-[#8b9bb5] mt-4 max-w-2xl text-sm leading-relaxed">
              Календарь дополняется по мере утверждения и поступления информации.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div>
              <div className="text-[10px] text-[#6b7a8d] font-oswald uppercase tracking-wider mb-2">Статус</div>
              <div className="flex flex-wrap gap-2">
                {([["all", "Все"], ["own", "Организуем"], ["participate", "Участвуем"], ["plan", "Планируем"]] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setFilterStatus(key)}
                    className={`text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-lg border transition-all ${
                      filterStatus === key
                        ? "bg-[#e87722] border-[#e87722] text-white"
                        : "border-white/10 text-[#8b9bb5] hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[#6b7a8d] font-oswald uppercase tracking-wider mb-2">Дисциплина</div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterDiscipline("all")}
                  className={`text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-lg border transition-all ${
                    filterDiscipline === "all"
                      ? "bg-white text-black border-white"
                      : "border-white/10 text-[#8b9bb5] hover:border-white/30 hover:text-white"
                  }`}
                >
                  Все дисциплины
                </button>
                {(Object.keys(DISCIPLINE_LABELS) as EventDiscipline[]).map(key => (
                  <button
                    key={key}
                    onClick={() => setFilterDiscipline(key)}
                    className={`text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-lg border transition-all ${
                      filterDiscipline === key
                        ? "bg-white text-black border-white"
                        : "border-white/10 text-[#8b9bb5] hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {DISCIPLINE_LABELS[key]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Event cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredEvents.map((ev, i) => (
              <div
                key={`${ev.title}-${i}`}
                className={`bg-[#161f2e] border p-5 rounded-lg transition-all group ${
                  ev.status === "own"
                    ? "border-[#e87722]/40 hover:border-[#e87722]"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span
                    className={`text-[10px] px-2 py-1 font-oswald uppercase tracking-wider rounded-lg ${
                      ev.status === "own"
                        ? "bg-[#e87722] text-white"
                        : ev.status === "participate"
                        ? "bg-white/10 text-[#e8e8e8]"
                        : "bg-[#e87722]/10 text-[#e87722]"
                    }`}
                  >
                    {STATUS_LABELS[ev.status]}
                  </span>
                  <span className="text-[9px] text-[#6b7a8d] font-oswald uppercase tracking-wider">
                    {DISCIPLINE_LABELS[ev.discipline]}
                  </span>
                </div>
                <div className="font-oswald text-white text-sm uppercase tracking-wide mb-3 leading-tight group-hover:text-[#e87722] transition-colors">
                  {ev.title}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={12} className="text-[#6b7a8d]" />
                    <span className="text-[#8b9bb5] text-xs">{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={12} className="text-[#6b7a8d]" />
                    <span className="text-[#6b7a8d] text-xs">{ev.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16 text-[#6b7a8d]">
              <Icon name="SearchX" size={32} className="mx-auto mb-3" />
              <div className="text-sm">По выбранным фильтрам событий не найдено</div>
            </div>
          )}

          <div className="mt-10 text-center">
            <button
              onClick={() => onOpenForm("event")}
              className="text-sm text-[#e87722] border border-[#e87722]/30 hover:border-[#e87722] hover:bg-[#e87722]/10 px-8 py-3 rounded-lg transition-all font-oswald uppercase tracking-wider"
            >
              Подать заявку на участие
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroAboutSections;
