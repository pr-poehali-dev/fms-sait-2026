import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  HERO_IMG,
  LOGO,
  NAV_ITEMS,
  DIRECTIONS,
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
            <button onClick={() => onOpenForm("member")}
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
            <button onClick={() => { onOpenForm("member"); setMenuOpen(false); }}
              className="mt-4 w-full bg-[#c8102e] text-white py-3 font-oswald tracking-wider uppercase text-sm rounded-sm">
              Стать участником
            </button>
          </div>
        )}
      </header>

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
              <button onClick={() => onOpenForm("member")}
                className="bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:scale-105">
                Стать участником
              </button>
              <button onClick={() => scrollTo("park")}
                className="border border-white/30 hover:border-white text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:bg-white/5">
                Экстрим-парк
              </button>
              <button onClick={() => onOpenForm("partner")}
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

      <section id="calendar" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="h-px w-12 bg-[#c8102e] mb-5" />
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">Календарь мероприятий 2026</h2>
            <p className="text-[#9e9e9e] mt-4 max-w-2xl text-sm leading-relaxed">
              Календарь дополняется по мере утверждения и поступления информации.
            </p>
          </div>

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
            <button onClick={() => onOpenForm("event")}
              className="text-sm text-[#c8102e] border border-[#c8102e]/30 hover:border-[#c8102e] hover:bg-[#c8102e]/10 px-8 py-3 rounded-sm transition-all font-oswald uppercase tracking-wider">
              Подать заявку на участие
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroAboutSections;
