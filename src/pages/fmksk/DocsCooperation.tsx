import Icon from "@/components/ui/icon";
import { PARTNERS, DOCS_AVAILABLE } from "./data";

interface DocsCooperationProps {
  onOpenForm: (key: string) => void;
}

export default function DocsCooperation({ onOpenForm }: DocsCooperationProps) {
  return (
    <>
      {/* ── 4. DOCS ── */}
      <section id="docs" className="py-24 bg-[#0c1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="flex justify-center mb-4">
                <div className="h-1 w-14 bg-[#e87722] rounded-full" />
              </div>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Документация
              </h2>
              <p className="text-[#8b9bb5] mt-4 text-sm leading-relaxed">
                Официальные документы федерации (устав, свидетельство о регистрации, положения, регламенты, формы заявок){" "}
                <span className="text-white font-medium">готовы предоставить по запросу</span>. Отправьте заявку через форму или напишите нам на почту.
              </p>
            </div>

            {/* Doc list card */}
            <div className="bg-[#161f2e] border border-white/5 rounded-lg p-8 mb-6">
              <div className="font-oswald text-xs text-[#e87722] uppercase tracking-widest mb-6 text-center">
                Перечень документов
              </div>
              <div className="space-y-3">
                {DOCS_AVAILABLE.map(doc => (
                  <div key={doc.title} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
                    <div className="w-8 h-8 bg-[#e87722]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name={doc.icon} fallback="FileText" size={15} className="text-[#e87722]" />
                    </div>
                    <span className="text-[#e8e8e8] text-sm">{doc.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div className="bg-gradient-to-br from-[#e87722]/10 to-[#161f2e] border border-[#e87722]/30 rounded-lg p-8 text-center">
              <Icon name="FileSearch" fallback="FileText" size={28} className="text-[#e87722] mx-auto mb-4" />
              <div className="font-oswald text-xl text-white uppercase tracking-wide mb-3">Запросить документы</div>
              <p className="text-[#8b9bb5] text-sm leading-relaxed mb-6 max-w-md mx-auto">
                Если вам необходимы официальные документы федерации — отправьте запрос. Мы оперативно предоставим все необходимые материалы.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => onOpenForm("question")}
                  className="bg-[#e87722] hover:bg-[#cc6619] text-white font-oswald uppercase tracking-widest text-sm px-6 py-4 rounded-lg transition-all"
                >
                  Запросить документы
                </button>
                <a
                  href="mailto:accounting-dep@groupgrand.ru"
                  className="block text-center border border-white/20 hover:border-white text-white font-oswald uppercase tracking-widest text-xs px-6 py-4 rounded-lg transition-all"
                >
                  accounting-dep@groupgrand.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. COOPERATION ── */}
      <section id="cooperation" className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Сотрудничество
            </h2>
            <p className="text-[#8b9bb5] mt-4 max-w-2xl text-sm leading-relaxed">
              ФМКСК открыта к сотрудничеству с органами власти, государственными структурами, бизнесом, брендами, медиа и общественными организациями на краевом и федеральном уровнях.
            </p>
          </div>

          {/* Partners grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-14">
            {PARTNERS.map(p => (
              <div
                key={p}
                className="bg-[#161f2e] border border-white/5 h-16 rounded-lg flex items-center justify-center text-center px-3 text-[#8b9bb5] text-[11px] font-oswald uppercase tracking-wider hover:border-[#e87722]/30 hover:text-white transition-all"
              >
                {p}
              </div>
            ))}
          </div>

          {/* Investor section */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
              <h3 className="font-oswald text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                Для партнёров<br />и инвесторов
              </h3>
              <p className="text-[#8b9bb5] mt-6 mb-6 leading-relaxed">
                Федерация предлагает партнёрам и инвесторам возможности для участия в развитии мотоспорта, событийного туризма и спортивной инфраструктуры Краснодарского края.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Брендинг на мероприятиях и трассах краевого уровня",
                  "Соинвестирование в спортивные объекты региона",
                  "Совместные PR и медиапроекты",
                  "Участие в грантовых программах",
                  "Взаимодействие с органами власти Краснодарского края",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="ChevronRight" size={14} className="text-[#e87722] shrink-0" />
                    <span className="text-[#8b9bb5] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenForm("partner")}
                  className="bg-[#e87722] hover:bg-[#cc6619] text-white font-oswald uppercase tracking-widest text-sm px-6 py-3 rounded-lg transition-all"
                >
                  Стать партнёром
                </button>
                <button
                  onClick={() => onOpenForm("question")}
                  className="border border-white/20 hover:border-white text-white font-oswald uppercase tracking-widest text-sm px-6 py-3 rounded-lg transition-all"
                >
                  Запросить презентацию
                </button>
              </div>
            </div>

            <div className="bg-[#161f2e] border border-white/5 rounded-lg p-8 flex flex-col justify-center">
              <Icon name="Handshake" size={36} className="text-[#e87722] mb-5" />
              <div className="font-oswald text-xl text-white uppercase tracking-wide mb-3">
                Межрегиональное сотрудничество
              </div>
              <p className="text-[#8b9bb5] text-sm leading-relaxed mb-6">
                Федерация координирует взаимодействие между регионами ЮФО, поддерживает совместные мероприятия и развивает единые стандарты подготовки спортсменов.
              </p>
              <div className="space-y-2">
                {[
                  "ФМС России",
                  "Региональные федерации ЮФО",
                  "Администрация Краснодарского края",
                  "Муниципальные образования",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={14} className="text-[#e87722] shrink-0" />
                    <span className="text-[#8b9bb5] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
