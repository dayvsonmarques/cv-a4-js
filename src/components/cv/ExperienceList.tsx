import { Experience } from '@/types/cv.types';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const periods = experience.period.split(' | ');
  
  return (
    <div>
      <div className="flex justify-between items-start mb-1.5">
        <div>
          <h3 className="font-semibold text-gray-900">{experience.title}</h3>
          <p className="text-gray-600">{experience.company}</p>
        </div>
        <div className="text-gray-500 text-right">
          {periods.map((period, index) => (
            <div key={index} className="text-sm">{period}</div>
          ))}
        </div>
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
