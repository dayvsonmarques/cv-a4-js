import { SkillCategory } from '@/types/cv.types';
import { Section } from './Section';
import { SkillsGrid } from './SkillsGrid';
import { cvData } from '@/data/cv.data';

interface SkillsProps {
  categories?: SkillCategory[];
}

export function Skills({ categories = cvData.skillCategories }: SkillsProps) {
  return (
    <Section title="Habilidades">
      <SkillsGrid categories={categories} />
    </Section>
  );
}
