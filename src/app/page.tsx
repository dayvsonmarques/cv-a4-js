'use client';

import { cvData } from '@/data/cv.data';
import {
  Header,
  Section,
  About,
  EducationList,
  SkillsGrid,
  LanguagesList,
  ExperienceList,
  CVPage,
} from '@/components/cv';

export default function Home() {
  const { personalInfo, about, education, skillCategories, languages, experiences } = cvData;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="cv-pages-wrapper">
        {/* Página 1 */}
        <CVPage>
          <Header
            name={personalInfo.name}
            title={personalInfo.title}
            contacts={personalInfo.contacts}
          />

          <Section title="Sobre" className="mb-5">
            <About paragraphs={about} />
          </Section>

          <Section title="Formação Acadêmica">
            <EducationList items={education} />
          </Section>

          <Section title="Habilidades Técnicas">
            <SkillsGrid categories={skillCategories} />
          </Section>

          <Section title="Idiomas">
            <LanguagesList languages={languages} />
          </Section>
        </CVPage>
        {/* Fim da Página 1 */}

        {/* Página 2 - Experiência Profissional */}
        <CVPage>
          <Section title="Experiência Profissional">
            <ExperienceList experiences={experiences} />
          </Section>
        </CVPage>
        {/* Fim da Página 2 */}
      </div>
    </div>
  );
}
