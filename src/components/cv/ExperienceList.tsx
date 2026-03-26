import { Experience } from '@/types/cv.types';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const periods = experience.period.split(' | ');

  const bulletItems = experience.responsibilities;
  const techStack = experience.skills ? experience.skills.join(', ') : null;

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
        <div className="experiences__responsibilities text-gray-700">
          {bulletItems.map((responsibility, index) => (
            <p key={index} className="experiences__responsibility">
              {index === 0 && <strong>Atividades: </strong>}{responsibility}
            </p>
          ))}
        </div>
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
