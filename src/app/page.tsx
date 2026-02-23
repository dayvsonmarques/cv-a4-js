'use client';

import { cvData } from '@/data/cv.data';
import { Section, About, EducationList } from '@/components/cv';

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

        <section className="cv__section">
          <h3 className="cv__section-title">Contatos</h3>
          <ul className="cv__contacts-list">
            {personalInfo.contacts.slice(2).map((c, i) => {
              if (c.icon === 'whatsapp') {
                return (
                  <li key={i} className="cv__contacts-item">Whatsapp {c.text}</li>
                );
              }
              const label = c.text;
              return (
                <li key={i} className="cv__contacts-item">{label}{c.href ? ` (${c.href})` : ''}</li>
              );
            })}
          </ul>
        </section>

        <Section title="Sobre">
          <About />
        </Section>

        <Section title="Educação">
          <EducationList items={education} />
        </Section>

        <section className="cv__section">
          <h3 className="cv__section-title">Idiomas</h3>
          <ul className="cv__languages-list">
            {languages.map((l, i) => (
              <li key={i} className="cv__languages-item">{l.name}: {l.level}</li>
            ))}
          </ul>
        </section>

        <section className="cv__section cv__experiences">
          <h3 className="cv__section-title">Experiência Profissional</h3>
          <ul className="cv__experience-list">
            {experiences.map((exp, i) => {
              const stackLine = exp.responsibilities.find(r => /stack:/i.test(r));
              const activityLines = exp.responsibilities.filter(r => !/stack:/i.test(r));

              return (
                <li key={i} className="cv__exp-item">
                  <div className="cv__exp-title">{exp.title} {exp.company ? (<span className="cv__exp-company">({exp.company})</span>) : null}</div>
                  <div className="cv__exp-period"><strong>Período:</strong> {exp.period}</div>

                  <div className="cv__exp-activities">
                    <span className="cv__exp-activities-label">Atividades:</span>
                    <span className="cv__exp-activities-text">{activityLines.join(' ').trim()}</span>
                    {stackLine && (
                      <div className="cv__exp-tech"><strong>Tecnologias:</strong> {stackLine.replace(/.*stack:/i, '').trim()}</div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
 
