import { SkillCategory } from '@/types/cv.types';

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {categories.map((category, index) => (
        <div key={index}>
          <h3 className="font-medium text-gray-900 mb-1 text-sm">{category.title}</h3>
          <div className="flex flex-wrap gap-1">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`${category.badgeClass} px-2 py-0.5 rounded text-sm leading-none mr-1 mb-1`}
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
