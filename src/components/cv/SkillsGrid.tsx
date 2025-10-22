import { SkillCategory } from '@/types/cv.types';

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {categories.map((category, index) => (
        <div key={index}>
          <h3 className="font-medium text-gray-900 mb-2">{category.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {category.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className={`${category.badgeClass} px-2 py-1 rounded text-sm`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
