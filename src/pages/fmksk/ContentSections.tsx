import Icon from "@/components/ui/icon";
import {
  INFRA_IMG,
  KIDS_IMG,
  LOGO,
  NAV_ITEMS,
  PARTNERS,
  NEWS,
  DOCS_AVAILABLE,
  scrollTo,
} from "./data";

interface ContentSectionsProps {
  onOpenForm: (key: string) => void;
  formTitles: Record<string, string>;
  formData: { name: string; phone: string; email: string; comment: string; agree: boolean };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; email: string; comment: string; agree: boolean }>>;
  handleFormSubmit: (e: React.FormEvent) => void;
  formSent: boolean;
}

function ContentSections({ onOpenForm, formTitles, formData, setFormData, handleFormSubmit, formSent }: ContentSectionsProps) {
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
                ФМКСК координирует взаимодействие с федерациями мотоспорта других регионов ЮФО, Федерацией мотоциклетного спорта России, органами власти Краснодарского края и муниципальными образованиями.
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

      {/* ── 6. CONTACTS ── */}
      <section id="contacts" className="py-24 bg-[#0c1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form LEFT */}
            <div>
              <div className="font-oswald text-xl text-white uppercase tracking-wider mb-6">Написать нам</div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#6b7a8d] font-oswald uppercase tracking-wider block mb-2">Имя *</label>
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Ваше имя"
                      className="w-full bg-[#161f2e] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#3a4a5a]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7a8d] font-oswald uppercase tracking-wider block mb-2">Телефон</label>
                    <input
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-[#161f2e] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#3a4a5a]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#6b7a8d] font-oswald uppercase tracking-wider block mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-[#161f2e] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#3a4a5a]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#6b7a8d] font-oswald uppercase tracking-wider block mb-2">Сообщение</label>
                  <textarea
                    value={formData.comment}
                    onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                    placeholder="Расскажите о вашем запросе..."
                    rows={4}
                    className="w-full bg-[#161f2e] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors resize-none placeholder:text-[#3a4a5a]"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agree}
                    onChange={e => setFormData(p => ({ ...p, agree: e.target.checked }))}
                    className="mt-1 accent-[#e87722]"
                  />
                  <span className="text-[#6b7a8d] text-xs leading-relaxed group-hover:text-[#8b9bb5] transition-colors">
                    Я согласен(на) на обработку персональных данных в соответствии с политикой конфиденциальности федерации
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full bg-[#e87722] hover:bg-[#cc6619] text-white font-oswald uppercase tracking-widest text-sm py-4 rounded-lg transition-all hover:scale-[1.01]"
                >
                  {formSent ? "Заявка отправлена" : "Отправить заявку"}
                </button>
              </form>
            </div>

            {/* Contacts RIGHT */}
            <div>
              <div className="h-1 w-14 bg-[#e87722] rounded-full mb-5" />
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                Связаться с федерацией
              </h2>
              <p className="text-[#8b9bb5] mt-6 mb-10 leading-relaxed">
                Федерация открыта для всех — спортсменов, родителей, организаций, инвесторов и партнёров на территории Краснодарского края и за его пределами.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e87722]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="MapPin" size={18} className="text-[#e87722]" />
                  </div>
                  <div>
                    <div className="text-[#6b7a8d] text-xs font-oswald uppercase tracking-wider">Адрес</div>
                    <div className="text-white text-sm mt-0.5 whitespace-pre-line">
                      {"353460, Россия, Краснодарский край,\nг. Геленджик, ул. Тельмана, д. 146, помещ. 3"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e87722]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Mail" size={18} className="text-[#e87722]" />
                  </div>
                  <div>
                    <div className="text-[#6b7a8d] text-xs font-oswald uppercase tracking-wider">Email</div>
                    <a
                      href="mailto:accounting-dep@groupgrand.ru"
                      className="text-white text-sm mt-0.5 hover:text-[#e87722] transition-colors block"
                    >
                      accounting-dep@groupgrand.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e87722]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Phone" size={18} className="text-[#e87722]" />
                  </div>
                  <div>
                    <div className="text-[#6b7a8d] text-xs font-oswald uppercase tracking-wider">Телефон</div>
                    <a
                      href="tel:+79384444529"
                      className="text-white text-sm mt-0.5 hover:text-[#e87722] transition-colors block"
                    >
                      8 (938) 4444-529
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#e87722]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="User" size={18} className="text-[#e87722]" />
                  </div>
                  <div>
                    <div className="text-[#6b7a8d] text-xs font-oswald uppercase tracking-wider">Президент</div>
                    <div className="text-white text-sm mt-0.5">Петросян Альберт Тигранович</div>
                  </div>
                </div>
              </div>

              {/* Requisites card */}
              <div className="mt-8 p-5 bg-[#161f2e] border border-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-oswald text-xs text-white uppercase tracking-wider">Реквизиты НКО «ФМКСК»</div>
                  <span className="text-[9px] text-[#6b7a8d] font-oswald uppercase tracking-wider">Официально</span>
                </div>
                <div className="space-y-1.5 text-xs text-[#8b9bb5] font-mono leading-relaxed">
                  <div><span className="text-[#6b7a8d]">ОГРН:</span> 1232300040950 от 14.07.2023</div>
                  <div><span className="text-[#6b7a8d]">ИНН / КПП:</span> 2304081083 / 230401001</div>
                  <div className="pt-2 border-t border-white/5 mt-2">
                    <span className="text-[#6b7a8d] italic">Банковские реквизиты предоставляются по запросу</span>
                  </div>
                </div>
              </div>

              {/* Form quick-buttons */}
              <div className="mt-10 flex flex-wrap gap-3">
                {(Object.keys(formTitles) as string[]).map(formKey => (
                  <button
                    key={formKey}
                    onClick={() => onOpenForm(formKey)}
                    className="border border-white/10 hover:border-[#e87722]/50 hover:text-[#e87722] text-[#8b9bb5] text-xs font-oswald uppercase tracking-wider px-4 py-2 rounded-lg transition-all"
                  >
                    {formTitles[formKey]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FOOTER ── */}
      <footer className="bg-[#080e1a] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Col 1 — Logo */}
            <div>
              <img
                src={LOGO}
                alt="ФМКСК — Краснодарская краевая федерация мотоциклетного и квадроциклетного спорта"
                className="h-10 w-auto object-contain mb-5"
              />
              <p className="text-[#6b7a8d] text-xs leading-relaxed">
                Краснодарская краевая общественная организация по координации и развитию мотоциклетного и квадроциклетного спорта. Краснодарский край.
              </p>
            </div>

            {/* Col 2 — Nav first 3 */}
            <div>
              <div className="font-oswald text-xs text-white uppercase tracking-widest mb-4">Навигация</div>
              <div className="space-y-2">
                {NAV_ITEMS.slice(0, 3).map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block text-[#6b7a8d] hover:text-[#e87722] text-xs transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 3 — Nav last 3 */}
            <div>
              <div className="font-oswald text-xs text-white uppercase tracking-widest mb-4">Разделы</div>
              <div className="space-y-2">
                {NAV_ITEMS.slice(3).map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="block text-[#6b7a8d] hover:text-[#e87722] text-xs transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Col 4 — Contacts */}
            <div>
              <div className="font-oswald text-xs text-white uppercase tracking-widest mb-4">Контакты</div>
              <div className="space-y-2 text-[#6b7a8d] text-xs leading-relaxed">
                <div>Краснодарский край, г. Геленджик,<br />ул. Тельмана, д. 146, помещ. 3</div>
                <a href="mailto:accounting-dep@groupgrand.ru" className="block hover:text-[#e87722] transition-colors">
                  accounting-dep@groupgrand.ru
                </a>
                <a href="tel:+79384444529" className="block hover:text-[#e87722] transition-colors">
                  8 (938) 4444-529
                </a>
                <div className="pt-2 text-[#3a4a5a]">ОГРН 1232300040950<br />ИНН 2304081083</div>
              </div>
              <div className="mt-4 flex gap-3">
                <div className="w-8 h-8 border border-white/10 hover:border-[#e87722] rounded-lg flex items-center justify-center cursor-pointer transition-colors group">
                  <Icon name="Send" size={14} className="text-[#6b7a8d] group-hover:text-[#e87722] transition-colors" />
                </div>
                <div className="w-8 h-8 border border-white/10 hover:border-[#e87722] rounded-lg flex items-center justify-center cursor-pointer transition-colors group">
                  <Icon name="Youtube" fallback="Video" size={14} className="text-[#6b7a8d] group-hover:text-[#e87722] transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[#3a4a5a] text-xs text-center sm:text-left">
              © 2023—2026 Краснодарская краевая общественная организация<br />
              «Федерация мотоциклетного и квадроциклетного спорта» (НКО «ФМКСК»)
            </div>
            <div className="flex gap-4 text-[#3a4a5a] text-xs">
              <span className="hover:text-[#6b7a8d] cursor-pointer transition-colors">Политика конфиденциальности</span>
              <span className="hover:text-[#6b7a8d] cursor-pointer transition-colors">Реквизиты</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ContentSections;
