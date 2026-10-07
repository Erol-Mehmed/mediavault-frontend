import Image from 'next/image';

interface AuthFeaturesChecklistProps {
  icons?: {
    name: string;
    alt: string;
    width: number;
    height: number;
  }[];
  features: string[];
}

export default function AuthFeaturesChecklist({
  icons,
  features,
}: AuthFeaturesChecklistProps) {
  return (
    <div className="checklist-container">
      {icons && icons.length > 0
        ? features.map((name, i) => (
            <div className="feature-container" key={`${name}-${i}`}>
              <div className="icon-wrapper">
                <Image
                  src={`/images/${icons[i].name}.svg`}
                  alt={`{${icons[i].alt} svg.}`}
                  width={icons[i].width}
                  height={icons[i].height}
                />
              </div>

              <p>{name}</p>
            </div>
          ))
        : features.map((name, i) => (
            <div className="feature-container" key={`${name}-${i}`}>
              <div className="icon-wrapper">
                <Image
                  src="/images/checkmark.svg"
                  alt="Checkmark svg."
                  width={12}
                  height={10}
                />
              </div>

              <p>{name}</p>
            </div>
          ))}
    </div>
  );
}
