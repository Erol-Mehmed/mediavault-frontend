import { ArrowIcon } from '@/shared/components';

interface AuthBtnProps {
  text: string;
  loadingText: string;
  loading: boolean;
}

export default function AuthBtn({ text, loadingText, loading }: AuthBtnProps) {
  return (
    <button disabled={loading} type="submit" className="auth-btn">
      <span className="text">{loading ? loadingText : text}</span>

      <ArrowIcon />
    </button>
  );
}
