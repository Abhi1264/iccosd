import { ReactNode } from "react";

export function TwoColumnSection({
  left,
  right,
  className = "",
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[1fr_minmax(0,420px)] gap-8 md:gap-12 items-start ${className}`}
    >
      <div className="min-w-0">{left}</div>
      <div className="min-w-0 overflow-hidden">{right}</div>
    </div>
  );
}
