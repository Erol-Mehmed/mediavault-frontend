interface AuthBtnProps {
  text: string;
  loading: boolean;
}

export default function AuthBtn({ text, loading }: AuthBtnProps) {
  return (
    <button disabled={loading} type="submit">
      {loading ? 'Signing in...' : text}
    </button>
  );
}
