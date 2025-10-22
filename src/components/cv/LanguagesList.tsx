import { Language as LanguageType } from '@/types/cv.types';

interface LanguagesListProps {
  languages: LanguageType[];
}

export function LanguagesList({ languages }: LanguagesListProps) {
  return (
    <div className="space-y-2">
      {languages.map((language, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">{language.name}</span>
          <span className="text-gray-600">{language.level}</span>
        </div>
      ))}
    </div>
  );
}
