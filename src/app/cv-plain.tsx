// Página de currículo simples, legível para IA
import { cvData } from "../data/cv.data";

export default function CVPlainPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "monospace", background: "#fff", color: "#222" }}>
      <h1>{cvData.personalInfo.name}</h1>
      <h2>{cvData.personalInfo.title}</h2>
      <section>
        <h3>Contacts</h3>
        <ul>
          {cvData.personalInfo.contacts.map((c, i) => (
            <li key={i}>{c.text}{c.href ? ` (${c.href})` : ""}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>About</h3>
        {cvData.about.map((a, i) => <p key={i}>{a}</p>)}
      </section>
      <section>
        <h3>Education</h3>
        <ul>
          {cvData.education.map((e, i) => (
            <li key={i}>{e.title} - {e.institution} ({e.period})</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          {cvData.skillCategories.map((cat, i) => (
            <li key={i}><strong>{cat.title}:</strong> {cat.skills.join(", ")}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Languages</h3>
        <ul>
          {cvData.languages.map((l, i) => (
            <li key={i}>{l.name}: {l.level}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Experience</h3>
        <ul>
          {cvData.experiences.map((exp, i) => (
            <li key={i}>
              <strong>{exp.title}</strong> - {exp.company} ({exp.period})
              <ul>
                {exp.responsibilities.map((r, j) => <li key={j}>{r}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
