import { ReactNode } from 'react';

interface AuthCardProps {
  featuresText: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthCard({
  featuresText,
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <section className="auth-card-container">
      <p className="features-info">{featuresText}</p>

      <div className="title-subtitle">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {children}
    </section>
  );
}
