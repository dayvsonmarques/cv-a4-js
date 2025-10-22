import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className = 'mb-4' }: SectionProps) {
  return (
    <section className={className}>
      <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-800 pb-1.5">
        {title}
      </h2>
      {children}
    </section>
  );
}
