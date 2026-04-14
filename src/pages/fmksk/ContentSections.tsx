import InfraKidsNews from "./InfraKidsNews";
import DocsCooperation from "./DocsCooperation";
import ContactsFooter from "./ContactsFooter";

interface ContentSectionsProps {
  onOpenForm: (key: string) => void;
  formTitles: Record<string, string>;
  formData: { name: string; phone: string; email: string; comment: string; agree: boolean };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; email: string; comment: string; agree: boolean }>>;
  handleFormSubmit: (e: React.FormEvent) => void;
  formSent: boolean;
}

export default function ContentSections({ onOpenForm, formTitles, formData, setFormData, handleFormSubmit, formSent }: ContentSectionsProps) {
  return (
    <>
      <InfraKidsNews onOpenForm={onOpenForm} />
      <DocsCooperation onOpenForm={onOpenForm} />
      <ContactsFooter
        onOpenForm={onOpenForm}
        formTitles={formTitles}
        formData={formData}
        setFormData={setFormData}
        handleFormSubmit={handleFormSubmit}
        formSent={formSent}
      />
    </>
  );
}
