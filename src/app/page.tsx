'use client';

import { cvData } from '@/data/cv.data';
import { Header, About, Skills, Contacts, LanguagesSection, EducationSection, ExperiencesSection } from '@/components/cv';

export default function Home() {
  const { personalInfo, education, languages, experiences } = cvData;

  return (
    <>
      <main className="cv">
        <Header name={personalInfo.name} title={personalInfo.title} contacts={personalInfo.contacts} />

        <Contacts contacts={personalInfo.contacts} />

        <section className="cv__section">
          <h3 className="cv__section-title">Sobre</h3>
          <About />
        </section>

        <Skills />

        <LanguagesSection languages={languages} />

        <EducationSection items={education} />

        <ExperiencesSection experiences={experiences} />

      </main>
    </>
  );
}

