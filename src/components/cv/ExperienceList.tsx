import { ReactNode } from 'react';
import { Experience } from '@/types/cv.types';

interface ExperienceItemProps {
  experience: Experience;
}

function formatResponsibility(text: string): ReactNode {
  const stackIndex = text.toLowerCase().indexOf('stack:');
  if (stackIndex === -1) {
    return text;
  }

  const prefix = text.slice(0, stackIndex);
  const suffix = text.slice(stackIndex + 'stack:'.length);

  return (
    <>
      {prefix}
      <strong>Stack:</strong>
      {suffix}
    </>
  );
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const periods = experience.period.split(' | ');
  
  return (
    <div className="mb-3">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-semibold text-gray-900">{experience.title}</h3>
          <p className="text-gray-600">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-500 text-right">
          {periods.map((period, index) => (
            <div key={index}>{period}</div>
          ))}
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-700 ml-4 space-y-0.5">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{formatResponsibility(responsibility)}</li>
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
