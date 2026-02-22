import { cvData } from '@/data/cv.data';

export function About() {
  const about = cvData.about || [];

  return (
    <div className="space-y-3">
      {about.map((paragraph, idx) => (
        <p key={idx} className="text-gray-700 leading-relaxed text-justify">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
