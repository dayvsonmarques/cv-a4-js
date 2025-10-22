import { Education as EducationType } from '@/types/cv.types';

interface EducationListProps {
  items: EducationType[];
}

export function EducationList({ items }: EducationListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <div className="flex justify-between items-center text-sm gap-4">
              <span className="text-gray-600">{item.institution}</span>
              <span className="text-gray-500 whitespace-nowrap">{item.period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
