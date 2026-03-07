import { SkillCategory } from '@/types/cv.types';

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {categories.map((category, index) => (
        <div key={index}>
          <h4 className="font-medium text-gray-900 mb-1 text-sm">{category.title}</h4>
          <ul className="flex flex-wrap gap-1 list-none p-0 m-0">
            {category.skills.map((skill, skillIndex) => (
              <li
                key={skillIndex}
                className={`${category.badgeClass} px-2 py-0.5 rounded text-sm leading-none mr-1 mb-1`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
