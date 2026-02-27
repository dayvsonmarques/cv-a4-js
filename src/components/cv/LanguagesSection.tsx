import { Language } from '@/types/cv.types';
import { Section } from './Section';

interface LanguagesSectionProps {
  languages: Language[];
}

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <Section title="Idiomas">
      <ul className="cv__languages-list">
        {languages.map((l, i) => (
          <li key={i} className="cv__languages-item">{l.name}: {l.level}</li>
        ))}
      </ul>
    </Section>
  );
}
