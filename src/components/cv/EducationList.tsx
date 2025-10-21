import { Education as EducationType } from '@/types/cv.types';

interface EducationListProps {
  items: EducationType[];
}

export function EducationList({ items }: EducationListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.institution}</p>
            </div>
            <span className="text-sm text-gray-500">{item.period}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
