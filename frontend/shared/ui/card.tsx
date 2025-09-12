import type { ReactNode } from "react";


export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="text-sm text-slate-700">{children}</div>;
}