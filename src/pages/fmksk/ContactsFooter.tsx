import Icon from "@/components/ui/icon";
import { LOGO, NAV_ITEMS, scrollTo } from "./data";

interface ContactsFooterProps {
  onOpenForm: (key: string) => void;
  formTitles: Record<string, string>;
  formData: { name: string; phone: string; email: string; comment: string; agree: boolean };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; email: string; comment: string; agree: boolean }>>;
  handleFormSubmit: (e: React.FormEvent) => void;
  formSent: boolean;
}

export default function ContactsFooter({ onOpenForm, formTitles, formData, setFormData, handleFormSubmit, formSent }: ContactsFooterProps) {
  return (
    <>
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
                  <div className="italic text-[#6b7a8d] pt-1">Банковские реквизиты предоставляются по запросу</div>
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
