import { ReactNode } from 'react';

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <section className="auth-card-container">
      <div className="title-subtitle">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {children}
    </section>
  );
}
