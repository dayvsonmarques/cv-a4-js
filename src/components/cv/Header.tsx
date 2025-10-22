import Link from 'next/link';
import { ContactInfo as ContactInfoType } from '@/types/cv.types';

interface HeaderProps {
  name: string;
  title: string;
  contacts: ContactInfoType[];
}

export function Header({ name, title, contacts }: HeaderProps) {
  return (
    <header className="mb-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-1.5">{name}</h1>
      <p className="text-xl text-gray-600 mb-3">{title}</p>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="icon-bw text-black">{contact.icon}</span>
            {contact.href ? (
              <Link href={contact.href} className="hover:text-gray-900">
                {contact.text}
              </Link>
            ) : (
              <span>{contact.text}</span>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
