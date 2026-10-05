import { ReactNode } from "react";

const styles = {
  notice: "border-l-4 border-gold-accent bg-blue-50",
  highlight: "border-l-4 border-gold-accent bg-gold-accent/5",
};

export function InfoBlock({
  children,
  title,
  type = "highlight",
}: {
  children: ReactNode;
  title?: string;
  type?: keyof typeof styles;
}) {
  return (
    <div className={`p-6 rounded-lg ${styles[type]}`}>
      {title && <h4 className="font-bold text-primary mb-2">{title}</h4>}
      <div className="text-sm text-foreground space-y-2">{children}</div>
    </div>
  );
}
