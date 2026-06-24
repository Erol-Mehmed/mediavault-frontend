import Skeleton from './Skeleton';

export default function HeaderSkeleton() {
  return (
    <div className="header-skeleton">
      <Skeleton className="header-skeleton__logo" />
      <Skeleton className="header-skeleton__nav" />
    </div>
  );
}
