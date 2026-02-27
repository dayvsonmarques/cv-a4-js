import { Language } from '@/types/cv.types';
import { Section } from './Section';

interface LanguagesSectionProps {
  languages: Language[];
  columns?: 1 | 2;
}

export function LanguagesSection({ languages, columns = 2 }: LanguagesSectionProps) {
  const listClass = columns === 2 ? 'cv__languages-list' : 'cv__languages-list cv__languages-list--single';

  return (
    <Section title="Idiomas">
      <ul className={listClass}>
        {languages.map((l, i) => (
          <li key={i} className="cv__languages-item">{l.name}: {l.level}</li>
        ))}
      </ul>
    </Section>
  );
}
