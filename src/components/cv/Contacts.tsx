import { ContactInfo as ContactInfoType } from '@/types/cv.types';

interface ContactsProps {
  contacts: ContactInfoType[];
}

export function Contacts({ contacts }: ContactsProps) {
  return (
    <section className="cv__section">
      <h3 className="cv__section-title">Contatos</h3>
      <ul className="cv__contacts-list grid grid-cols-2">
        {contacts.slice(2).map((c, i) => {
          if (c.icon === 'whatsapp') {
            return (
              <li key={i} className="cv__contacts-item">
                WhatsApp: <a href={`tel:${c.text.replace(/\D/g, '')}`}>{c.text}</a>
              </li>
            );
          }
          if (c.icon === 'email') {
            return (
              <li key={i} className="cv__contacts-item">
                E-mail: <a href={`mailto:${c.href}`}>{c.href}</a>
              </li>
            );
          }
          if (c.icon === 'website') {
            return (
              <li key={i} className="cv__contacts-item">
                Site: <a href={`https://${c.href}`}>{c.href}</a>
              </li>
            );
          }
          if (c.icon === 'linkedin') {
            return (
              <li key={i} className="cv__contacts-item">
                LinkedIn: <a href={`https://${c.href}`}>{c.href}</a>
              </li>
            );
          }
          if (c.icon === 'github') {
            return (
              <li key={i} className="cv__contacts-item">
                GitHub: <a href={`https://${c.href}`}>{c.href}</a>
              </li>
            );
          }
          return (
            <li key={i} className="cv__contacts-item">
              {c.text}{c.href ? `: ${c.href}` : ''}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
