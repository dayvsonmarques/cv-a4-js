import { Education as EducationType } from '@/types/cv.types';

interface EducationListProps {
  items: EducationType[];
}

export function EducationList({ items }: EducationListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-10">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <span className="text-sm text-gray-600">{item.institution}  ({item.period})</span>
          </div>
        </div>
      ))}
    </div>
  );
}
