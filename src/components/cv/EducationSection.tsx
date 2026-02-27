import { Education as EducationType } from '@/types/cv.types';
import { EducationList } from './EducationList';

interface EducationSectionProps {
  items: EducationType[];
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section className="cv__section cv__experiences">
      <EducationList items={items} />
    </section>
  );
}
