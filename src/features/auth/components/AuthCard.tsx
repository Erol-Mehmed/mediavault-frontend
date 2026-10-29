import { ReactNode } from 'react';

interface AuthCardProps {
  featuresText: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
}

export default function AuthCard({
  featuresText,
  title,
  subtitle,
  children,
  className,
}: AuthCardProps) {
  return (
    <section className={`auth-card-container ${className ?? ''}`}>
      <p className="features-info">{featuresText}</p>

      <div className="title-subtitle">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {children}

      <footer className="auth-footer">
        <p>MediaVault · Your personal media collection</p>
      </footer>
    </section>
  );
}
