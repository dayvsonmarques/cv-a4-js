import { ReactNode } from 'react';

interface CVPageProps {
  children: ReactNode;
}

export function CVPage({ children }: CVPageProps) {
  return <div className="cv-page">{children}</div>;
}
