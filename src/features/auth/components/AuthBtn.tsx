import { ArrowIcon } from '@/shared/components';

interface AuthBtnProps {
  text: string;
  loadingText: string;
  loading: boolean;
  className?: string;
}

export default function AuthBtn({
  text,
  className,
  loadingText,
  loading,
}: AuthBtnProps) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`auth-btn ${className ?? ''}`}
    >
      <span className="text">{loading ? loadingText : text}</span>

      <ArrowIcon />
    </button>
  );
}
