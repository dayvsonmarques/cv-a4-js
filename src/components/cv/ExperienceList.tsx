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
    <article className="experiences__item">
      <header className="experiences__header">
        <div className="experiences__meta">
          <h3 className="experiences__title font-semibold text-gray-900">{experience.title}</h3>
          <p className="experiences__company text-gray-600">{experience.company}</p>
        </div>
        <div className="experiences__period text-sm text-gray-500 text-right">
          {periods.map((period, index) => (
            <div key={index}>{period}</div>
          ))}
        </div>
      </header>

      <ul className="experiences__responsibilities list-disc list-inside text-gray-700 ml-4 space-y-0.5">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="experiences__responsibility">{formatResponsibility(responsibility)}</li>
        ))}
      </ul>
    </article>
  );
}

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <section className="experiences">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </section>
  );
}
