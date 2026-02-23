import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className = 'cv__section' }: SectionProps) {
  return (
    <section className={className}>
      <h3 className="cv__section-title">{title}</h3>
      {children}
    </section>
  );
}
