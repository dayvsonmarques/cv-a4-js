import { Education as EducationType } from '@/types/cv.types';

interface EducationListProps {
  items: EducationType[];
}

export function EducationList({ items }: EducationListProps) {
  return (
    <div className="cv__education">
      <h3 className="cv__section-title">Educação</h3>
      <ul className="cv__education-list">
      {items.map((item, index) => (
        <li key={index}>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-gray-900">{item.title}</span>
            <span className="text-gray-600">{item.institution} ({item.period})</span>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );

}
