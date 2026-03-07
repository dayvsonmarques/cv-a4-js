import { Experience } from '@/types/cv.types';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const periods = experience.period.split(' | ');

  // Separate descriptive bullets from the tech stack line
  const bulletItems = experience.responsibilities.filter(
    r => !r.trimStart().toLowerCase().startsWith('stack:')
  );
  const techLine = experience.responsibilities.find(
    r => r.trimStart().toLowerCase().startsWith('stack:')
  );
  const techStack = techLine ? techLine.slice(techLine.indexOf(':') + 1).trim() : null;

  return (
    <li className="experiences__item">
      <header className="experiences__header">
        <div className="experiences__meta">
          <h3 className="experiences__title font-semibold text-gray-900">{experience.title}</h3>
          <p className="experiences__company text-gray-600">{experience.company}</p>
        </div>
        <p className="experiences__period text-sm text-gray-500 text-right">
          {periods.map((period, index) => (
            <span key={index} className="block">{period}</span>
          ))}
        </p>
      </header>

      {bulletItems.length > 0 && (
        <ul className="experiences__responsibilities list-disc list-inside text-gray-700 ml-4 space-y-0.5">
          {bulletItems.map((responsibility, index) => (
            <li key={index} className="experiences__responsibility">{responsibility}</li>
          ))}
        </ul>
      )}

      {techStack && (
        <p className="experiences__tech">
          <strong>Tecnologias:</strong> {techStack}
        </p>
      )}
    </li>
  );
}

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <ol className="experiences">
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
    </ol>
  );
}
