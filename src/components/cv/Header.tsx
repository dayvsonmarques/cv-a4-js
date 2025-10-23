import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ContactIconType, ContactInfo as ContactInfoType } from '@/types/cv.types';

const ICON_MAP: Record<ContactIconType, ReactNode> = {
  location: (
    <Image src="/img/location.svg" alt="Localização" width={16} height={16} />
  ),
  age: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  ),
  whatsapp: (
    <Image src="/whatsapp.png" alt="WhatsApp" width={16} height={16} />
  ),
  website: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7.5 12 13l8.5-5.5" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17.5V13a2 2 0 0 1 4 0v4.5" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.478 2 2 6.486 2 12.02c0 4.425 2.865 8.18 6.839 9.504.5.09.682-.217.682-.483 0-.236-.01-.867-.015-1.701-2.782.604-3.369-1.344-3.369-1.344-.454-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.607.069-.607 1.004.07 1.533 1.042 1.533 1.042.892 1.53 2.341 1.088 2.91.833.091-.651.35-1.088.636-1.339-2.22-.253-4.555-1.114-4.555-4.956 0-1.095.39-1.99 1.029-2.69-.103-.254-.446-1.276.098-2.66 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.705.116 2.504.34 1.909-1.296 2.748-1.026 2.748-1.026.546 1.384.203 2.406.1 2.66.64.7 1.028 1.595 1.028 2.69 0 3.853-2.337 4.701-4.566 4.95.36.31.678.924.678 1.861 0 1.343-.012 2.425-.012 2.753 0 .268.18.576.688.478A10.024 10.024 0 0 0 22 12.02C22 6.486 17.522 2 12 2z"
      />
    </svg>
  ),
};

function ContactIcon({ type }: { type: ContactIconType }) {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center text-gray-700" aria-hidden="true">
      {ICON_MAP[type]}
    </span>
  );
}

interface HeaderProps {
  name: string;
  title: string;
  contacts: ContactInfoType[];
}

export function Header({ name, title, contacts }: HeaderProps) {
  return (
    <header className="mb-5 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-1.5">{name}</h1>
      <p className="text-xl text-gray-600 mb-3">{title}</p>
      
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-2">
            <ContactIcon type={contact.icon} />
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
