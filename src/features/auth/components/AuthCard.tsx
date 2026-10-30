import { ReactNode } from 'react';

interface AuthCardProps {
  featuresText?: string;
  title: string;
  subtitle: string;
  className?: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function AuthCard({
  featuresText,
  title,
  subtitle,
  className,
  icon,
  children,
}: AuthCardProps) {
  return (
    <section className={`auth-card-container ${className ?? ''}`}>
      {featuresText && <p className="features-info">{featuresText}</p>}
      {icon}

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
