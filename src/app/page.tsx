'use client';

import { cvData } from '@/data/cv.data';
import {
  Section,
  About,
  EducationList,
} from '@/components/cv';

export default function Home() {
  const { personalInfo, education, languages, experiences } = cvData;
  return (
    <>
      <style>{`
        @media print {
          body {
            margin: 0;
          }
          .cv-a4 {
            width: 210mm;
            min-height: 297mm;
            margin: 0;
            padding: 24mm 18mm;
            box-sizing: border-box;
            background: #fff;
            color: #222;
            font-family: monospace;
            font-size: 12pt;
            line-height: 1.7;
            border-radius: 0;
            box-shadow: none;
          }
          .cv-a4 section {
            page-break-inside: avoid;
          }
          .break-print {
            page-break-after: always;
          }
        }
      `}</style>
      <main
        className="cv-a4"
        style={{
          width: '210mm',
          minHeight: '297mm',
          margin: '0',
          padding: '20mm 18mm',
          fontFamily: 'monospace',
          background: '#fff',
          color: '#222',
          boxShadow: 'none',
          boxSizing: 'border-box',
          borderRadius: '0',
          fontSize: '12pt',
          lineHeight: 1.7,
          position: 'relative',
          whiteSpace: 'pre-line',
        }}
      >
        <h1 style={{ fontSize: '2em', marginBottom: '0.1em', fontWeight: 900, letterSpacing: '2px', lineHeight: 1.1 }}>{personalInfo.name}</h1>
        <h2 style={{ fontSize: '1.4em', marginTop: 0, marginBottom: '0.3em', fontWeight: 400 }}>{personalInfo.title}</h2>
        <div style={{ fontSize: '1em', marginBottom: '1em', color: '#444' }}>
          {personalInfo.contacts[0]?.text} | {personalInfo.contacts[1]?.text}
        </div>
        <section style={{ marginBottom: '1.2em' }}>
          <h3 style={{ fontSize: '1.2em', marginBottom: '0.3em' }}>Contatos</h3>
          <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
            {personalInfo.contacts.slice(2).map((c, i) => {
              if (c.icon === 'whatsapp') {
                return (
                  <li key={i} style={{ marginBottom: '0.1em' }}>Whatsapp {c.text}</li>
                );
              }
              const label = c.text;
              return (
                <li key={i} style={{ marginBottom: '0.1em' }}>{label}{c.href ? ` (${c.href})` : ""}</li>
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

        <section style={{ marginBottom: '1.2em' }}>
          <h3 style={{ fontSize: '1.2em', marginBottom: '0.3em' }}>Idiomas</h3>
          <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
            {languages.map((l, i) => (
              <li key={i} style={{ marginBottom: '0.1em' }}>{l.name}: {l.level}</li>
            ))}
          </ul>
        </section>

        <section className="break-print" style={{ marginBottom: '0.8em', lineHeight: 1.25 }}>
          <h3 style={{ fontSize: '1.2em', marginBottom: '0.25em' }}>Experiência Profissional</h3>
          <ul style={{ margin: 0, paddingLeft: '0.8em' }}>
            {experiences.map((exp, i) => {
              const stackLine = exp.responsibilities.find(r => /stack:/i.test(r));
              const activityLines = exp.responsibilities.filter(r => !/stack:/i.test(r));

              return (
                <li key={i} style={{ marginBottom: '0.6em' }}>
                  <div style={{ fontWeight: 700 }}>{exp.title} {exp.company ? (<span style={{ fontWeight: 400 }}>({exp.company})</span>) : null}</div>
                  <div style={{ fontSize: '0.95em', color: '#555', marginTop: '0.1em' }}><strong>Período:</strong> {exp.period}</div>

                  <div style={{ marginTop: '0.25em' }}>
                    <span style={{ fontSize: '0.95em', fontWeight: 600, marginRight: '0.35em' }}>Atividades:</span>
                    <span style={{ fontSize: '0.95em' }}>{activityLines.join(' ').trim()}</span>
                    {stackLine && (
                      <div style={{ marginTop: '0.15em', fontSize: '0.95em' }}>
                        <strong>Tecnologias:</strong> {stackLine.replace(/.*stack:/i, '').trim()}
                      </div>
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
