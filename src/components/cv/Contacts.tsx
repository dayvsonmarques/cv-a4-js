import { ContactInfo as ContactInfoType } from '@/types/cv.types';

interface ContactsProps {
  contacts: ContactInfoType[];
}

export function Contacts({ contacts }: ContactsProps) {
  return (
    <section className="cv__section">
      <h3 className="cv__section-title">Contatos</h3>
      <ul className="cv__contacts-list">
        {contacts.slice(2).map((c, i) => {
          if (c.icon === 'whatsapp') {
            return (
              <li key={i} className="cv__contacts-item">Whatsapp {c.text}</li>
            );
          }
          const label = c.text;
          return (
            <li key={i} className="cv__contacts-item">{label}{c.href ? ` (${c.href})` : ''}</li>
          );
        })}
      </ul>
    </section>
  );
}
