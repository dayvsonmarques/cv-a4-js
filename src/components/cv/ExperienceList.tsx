import { Experience } from '@/types/cv.types';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div>
      <div className="flex justify-between items-start mb-1.5">
        <div>
          <h3 className="font-semibold text-gray-900">{experience.title}</h3>
          <p className="text-gray-600">{experience.company}</p>
        </div>
        <span className="text-sm text-gray-500">{experience.period}</span>
      </div>
      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-0.5">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="space-y-3">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </div>
  );
}
