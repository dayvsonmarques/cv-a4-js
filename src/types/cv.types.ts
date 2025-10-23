export type ContactIconType =
  | 'location'
  | 'age'
  | 'whatsapp'
  | 'website'
  | 'email'
  | 'linkedin'
  | 'github';

export interface ContactInfo {
  icon: ContactIconType;
  text: string;
  href?: string;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  badgeClass: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    contacts: ContactInfo[];
  };
  about: string[];
  education: Education[];
  skillCategories: SkillCategory[];
  languages: Language[];
  experiences: Experience[];
}
