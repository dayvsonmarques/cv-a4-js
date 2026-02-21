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
    <main
      style={{
        width: '210mm',
        minHeight: '297mm',
        margin: '0 auto',
        padding: '24mm 18mm',
        fontFamily: 'monospace',
        background: '#fff',
        color: '#222',
        boxShadow: '0 0 8px #bbb',
        boxSizing: 'border-box',
        borderRadius: '4px',
        overflow: 'hidden',
        fontSize: '12pt',
        lineHeight: 1.7,
        position: 'relative',
        marginTop: '24px',
        marginBottom: '24px',
        whiteSpace: 'pre-line',
      }}
    >
      <h1 style={{ fontSize: '3em', marginBottom: '0.1em', fontWeight: 900, letterSpacing: '2px', lineHeight: 1.1 }}>{personalInfo.name}</h1>
      <h2 style={{ fontSize: '1.3em', marginTop: 0, marginBottom: '1.2em', fontWeight: 400 }}>{personalInfo.title}</h2>
      <section style={{ marginBottom: '1.2em' }}>
        <h3 style={{ fontSize: '1.1em', marginBottom: '0.3em' }}>Contatos</h3>
        <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
          {personalInfo.contacts.map((c, i) => (
            <li key={i} style={{ marginBottom: '0.1em' }}>{c.text}{c.href ? ` (${c.href})` : ""}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h3 style={{ fontSize: '1.1em', marginBottom: '0.3em' }}>Sobre</h3>
        {about.map((a, i) => <p key={i} style={{ margin: 0, marginBottom: '0.7em' }}>{a}</p>)}
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h3 style={{ fontSize: '1.1em', marginBottom: '0.3em' }}>Formação Acadêmica</h3>
        <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
          {education.map((e, i) => (
            <li key={i} style={{ marginBottom: '0.1em' }}>{e.title} - {e.institution} ({e.period})</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h3 style={{ fontSize: '1.1em', marginBottom: '0.3em' }}>Habilidades</h3>
        <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
          {skillCategories.map((cat, i) => (
            <li key={i} style={{ marginBottom: '0.1em' }}><strong>{cat.title}:</strong> {cat.skills.join(", ")}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h3 style={{ fontSize: '1.1em', marginBottom: '0.3em' }}>Idiomas</h3>
        <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
          {languages.map((l, i) => (
            <li key={i} style={{ marginBottom: '0.1em' }}>{l.name}: {l.level}</li>
          ))}
        </ul>
      </section>
      <section style={{ marginBottom: '1.2em' }}>
        <h3 style={{ fontSize: '1.1em', marginBottom: '0.3em' }}>Experiência Profissional</h3>
        <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
          {experiences.map((exp, i) => (
            <li key={i} style={{ marginBottom: '0.5em' }}>
              <strong>{exp.title}</strong> - {exp.company} ({exp.period})
              <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
                {exp.responsibilities.map((r, j) => <li key={j} style={{ marginBottom: '0.1em' }}>{r}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
