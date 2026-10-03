import { ArrowIcon } from '@/shared/components';

interface AuthBtnProps {
  text: string;
  loading: boolean;
}

export default function AuthBtn({ text, loading }: AuthBtnProps) {
  return (
    <button disabled={loading} type="submit" className="auth-btn">
      <span className="text">{loading ? 'Signing in...' : text}</span>

      <ArrowIcon />
    </button>
  );
}
