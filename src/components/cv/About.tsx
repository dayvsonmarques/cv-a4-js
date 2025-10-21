interface AboutProps {
  paragraphs: string[];
}

export function About({ paragraphs }: AboutProps) {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          className={`text-gray-700 leading-relaxed text-justify ${index > 0 ? 'mt-4' : ''}`}
        >
          {paragraph}
        </p>
      ))}
    </>
  );
}
