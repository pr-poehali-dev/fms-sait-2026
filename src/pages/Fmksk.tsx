import { useState } from "react";
import Icon from "@/components/ui/icon";
import HeroAboutSections from "./fmksk/HeroAboutSections";
import ContentSections from "./fmksk/ContentSections";

export default function Fmksk() {
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
    member: "Вступить в федерацию",
    partner: "Стать партнёром",
    event: "Заявка на мероприятие",
    question: "Задать вопрос",
    infrastructure: "Связаться по инфраструктуре",
  };

  return (
    <div className="bg-[#0c1220] text-[#f5f5f5] font-golos min-h-screen">
      <HeroAboutSections onOpenForm={setActiveForm} />
      <ContentSections
        onOpenForm={setActiveForm}
        formTitles={formTitles}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        formSent={formSent}
      />
      {activeForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setActiveForm(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-[#161f2e] border border-white/10 rounded-lg p-8 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="h-1 bg-[#e87722] absolute top-0 left-0 right-0 rounded-t-lg" />
            <button onClick={() => setActiveForm(null)} className="absolute top-4 right-4 text-[#6b7a8d] hover:text-white transition-colors">
              <Icon name="X" size={20} />
            </button>
            <h3 className="font-oswald text-xl text-white uppercase tracking-wider mb-6 mt-2">{formTitles[activeForm]}</h3>
            {formSent ? (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} className="text-[#e87722] mx-auto mb-4" />
                <div className="font-oswald text-white text-lg uppercase tracking-wider">Заявка отправлена!</div>
                <p className="text-[#6b7a8d] text-sm mt-2">Мы свяжемся с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="Имя *"
                  className="w-full bg-[#0c1220] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#3a4a5c]" />
                <input value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  placeholder="Телефон"
                  className="w-full bg-[#0c1220] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#3a4a5c]" />
                <input required type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  placeholder="Email *"
                  className="w-full bg-[#0c1220] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder:text-[#3a4a5c]" />
                <textarea value={formData.comment} onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                  placeholder="Комментарий" rows={3}
                  className="w-full bg-[#0c1220] border border-white/10 focus:border-[#e87722] text-white text-sm px-4 py-3 rounded-lg outline-none transition-colors resize-none placeholder:text-[#3a4a5c]" />
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required checked={formData.agree} onChange={e => setFormData(p => ({ ...p, agree: e.target.checked }))}
                    className="mt-1 accent-[#e87722]" />
                  <span className="text-[#6b7a8d] text-xs leading-relaxed">Согласен(на) на обработку персональных данных</span>
                </label>
                <button type="submit"
                  className="w-full bg-[#e87722] hover:bg-[#cc6619] text-white font-oswald uppercase tracking-widest text-sm py-4 rounded-lg transition-all">
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
