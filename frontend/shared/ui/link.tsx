import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ to, children, className }: LinkProps) {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
}