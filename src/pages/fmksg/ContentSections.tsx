import Icon from "@/components/ui/icon";
import {
  PARK_IMG,
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
              <button onClick={() => onOpenForm("park")}
                className="bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all hover:scale-105">
                Связаться по проекту
              </button>
            </div>
          </div>
        </div>
      </section>

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
              <button onClick={() => onOpenForm("member")}
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
                <button onClick={() => onOpenForm("question")}
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
                <button onClick={() => onOpenForm("partner")}
                  className="bg-[#c8102e] hover:bg-[#a50d25] text-white font-oswald uppercase tracking-widest text-sm px-6 py-3 transition-all">
                  Стать партнёром
                </button>
                <button onClick={() => onOpenForm("question")}
                  className="border border-white/20 hover:border-white text-white font-oswald uppercase tracking-widest text-sm px-6 py-3 transition-all">
                  Запросить презентацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <button key={formKey} onClick={() => onOpenForm(formKey)}
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
    </>
  );
}

export default ContentSections;
