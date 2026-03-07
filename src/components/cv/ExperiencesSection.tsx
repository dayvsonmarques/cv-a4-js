import { Experience } from '@/types/cv.types';
import { Section } from './Section';
import { ExperienceList } from './ExperienceList';

interface ExperiencesSectionProps {
  experiences: Experience[];
}

export function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  return (
    <Section title="Experiência Profissional" className="cv__section cv__experiences">
      <ExperienceList experiences={experiences} />
    </Section>
  );
}
