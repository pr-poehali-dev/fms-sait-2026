import Icon from "@/components/ui/icon";
import { INFRA_IMG, KIDS_IMG, NEWS } from "./data";

interface InfraKidsNewsProps {
  onOpenForm: (key: string) => void;
}

export default function InfraKidsNews({ onOpenForm }: InfraKidsNewsProps) {
  return (
    <>
      {/* ── 1. INFRASTRUCTURE ── */}
      <section id="infrastructure" className="py-24 bg-[#111827] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text LEFT */}
            <div className="order-1">
              <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Спортивная<br />
                <span className="text-[#e87722]">инфраструктура</span>
              </h2>
              <p className="text-[#8b9bb5] text-lg leading-relaxed mt-6 mb-6">
                Одна из ключевых задач ФМКСК — координация создания и модернизации спортивных объектов для мотоциклетного и квадроциклетного спорта. Федерация формирует единую сеть трасс, тренировочных площадок и соревновательных зон на территории всего Краснодарского края.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: "Map", label: "Трассы и маршруты" },
                  { icon: "Target", label: "Тренировочные зоны" },
                  { icon: "Users", label: "Зрительские площадки" },
                  { icon: "Wrench", label: "Сервисные объекты" },
                  { icon: "Heart", label: "Семейные зоны" },
                  { icon: "ShieldCheck", label: "Безопасность" },
                  { icon: "TrendingUp", label: "Событийный туризм" },
                ].map(f => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-2 bg-[#161f2e] border border-white/10 text-[#8b9bb5] text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-full hover:border-[#e87722]/40 hover:text-white transition-colors"
                  >
                    <Icon name={f.icon} size={14} className="text-[#e87722]" />
                    {f.label}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenForm("infrastructure")}
                className="bg-[#e87722] hover:bg-[#cc6619] text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                Связаться по инфраструктуре
              </button>
            </div>

            {/* Image RIGHT */}
            <div className="relative order-2">
              <img
                src={INFRA_IMG}
                alt="Спортивная инфраструктура Краснодарского края"
                className="w-full rounded-lg object-cover h-96 lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#0c1220]/90 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="MapPin" size={14} className="text-[#e87722]" />
                    <span className="text-white text-xs font-oswald uppercase tracking-wider">Краснодарский край</span>
                  </div>
                  <div className="text-[#6b7a8d] text-xs">Координация спортивной инфраструктуры региона</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. KIDS ── */}
      <section className="py-24 bg-[#0c1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image LEFT */}
            <div className="relative">
              <img
                src={KIDS_IMG}
                alt="Молодёжный мотоспорт — подготовка спортсменов"
                className="w-full rounded-lg object-cover h-96 lg:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220]/40 to-transparent rounded-lg" />
            </div>

            {/* Text RIGHT */}
            <div>
              <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Молодёжный спорт<br />и подготовка
              </h2>
              <p className="text-[#8b9bb5] text-lg leading-relaxed mt-6 mb-6">
                Ключевое направление ФМКСК — развитие системы детско-юношеской подготовки спортсменов в Краснодарском крае. Федерация координирует единые стандарты обучения, аттестацию тренеров и систему соревнований для детей и подростков по всему региону.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: "ShieldCheck", title: "Безопасность", desc: "Единые стандарты края" },
                  { icon: "Baby", title: "От 5 лет", desc: "Ранняя подготовка" },
                  { icon: "Award", title: "Соревнования", desc: "Краевые первенства" },
                  { icon: "Heart", title: "Семья", desc: "Семейные старты" },
                  { icon: "Bike", title: "Эндуро", desc: "Детские секции" },
                  { icon: "Tractor", title: "Квадроциклы", desc: "Детские программы" },
                ].map(f => (
                  <div
                    key={f.title}
                    className="bg-[#161f2e] border border-white/5 p-4 rounded-lg hover:border-[#e87722]/30 transition-colors text-center"
                  >
                    <Icon name={f.icon} size={20} className="text-[#e87722] mb-2 mx-auto" />
                    <div className="font-oswald text-white text-xs uppercase tracking-wide">{f.title}</div>
                    <div className="text-[#6b7a8d] text-[10px] mt-1">{f.desc}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenForm("member")}
                className="border border-[#e87722] text-[#e87722] hover:bg-[#e87722] hover:text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all"
              >
                Записать ребёнка
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NEWS ── */}
      <section id="news" className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                События и новости
              </h2>
            </div>
            <div className="text-[#e87722] text-xs font-oswald uppercase tracking-wider hidden sm:block cursor-pointer hover:text-white transition-colors">
              Все новости →
            </div>
          </div>

          <div className="grid md:grid-cols-[3fr_2fr] gap-6">
            {/* LEFT — big featured card */}
            <article className="bg-[#161f2e] border border-white/5 hover:border-[#e87722]/30 rounded-lg overflow-hidden group transition-all cursor-pointer">
              <div className="h-1 bg-[#e87722] rounded-t-lg" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] bg-[#e87722]/10 text-[#e87722] px-3 py-1.5 font-oswald uppercase tracking-wider rounded-full">
                    {NEWS[0].tag}
                  </span>
                  <span className="text-[#6b7a8d] text-xs">{NEWS[0].date}</span>
                </div>
                <h3 className="font-oswald text-white text-xl uppercase tracking-wide group-hover:text-[#e87722] transition-colors mb-4 leading-tight">
                  {NEWS[0].title}
                </h3>
                <p className="text-[#8b9bb5] text-sm leading-relaxed mb-6">{NEWS[0].excerpt}</p>
                <div className="flex items-center gap-2 text-[#e87722] text-xs font-oswald uppercase tracking-wider">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            </article>

            {/* RIGHT — 2 stacked smaller cards */}
            <div className="space-y-6">
              {NEWS.slice(1).map(n => (
                <article
                  key={n.title}
                  className="bg-[#161f2e] border border-white/5 hover:border-[#e87722]/30 rounded-lg overflow-hidden group transition-all cursor-pointer"
                >
                  <div className="h-0.5 bg-[#e87722]" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] bg-[#e87722]/10 text-[#e87722] px-2 py-1 font-oswald uppercase tracking-wider rounded-full">
                        {n.tag}
                      </span>
                      <span className="text-[#6b7a8d] text-xs">{n.date}</span>
                    </div>
                    <h3 className="font-oswald text-white text-sm uppercase tracking-wide group-hover:text-[#e87722] transition-colors mb-3 leading-tight">
                      {n.title}
                    </h3>
                    <p className="text-[#6b7a8d] text-xs leading-relaxed">{n.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#e87722] text-xs font-oswald uppercase tracking-wider">
                      <span>Читать</span>
                      <Icon name="ArrowRight" size={14} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
