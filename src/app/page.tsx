'use client';

import { cvData } from '@/data/cv.data';
import { About, Skills, Contacts, LanguagesSection, EducationSection, ExperiencesSection } from '@/components/cv';

export default function Home() {
  const { personalInfo, education, languages, experiences } = cvData;

  return (
    <>
      <main className="cv">
        <header className="cv__header">
          <h1 className="cv__name">{personalInfo.name}</h1>
          <h2 className="cv__title">{personalInfo.title}</h2>
          <div className="cv__meta">{personalInfo.contacts[0]?.text} | {personalInfo.contacts[1]?.text}</div>
        </header>

        <Contacts contacts={personalInfo.contacts} />

        <section className="cv__section">
          <h3 className="cv__section-title">Sobre</h3>
          <About />
        </section>

        <Skills />

        <div className="row">
          <div className="col col--2-3">
            <EducationSection items={education} />
          </div>
          <div className="col col--1-3">
            <LanguagesSection languages={languages} columns={1} />
          </div>
        </div>

        <ExperiencesSection experiences={experiences} />

      </main>
    </>
  );
}

