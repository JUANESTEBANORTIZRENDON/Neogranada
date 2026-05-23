import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

type SubmoduleBackButtonProps = {
  to: string;
  label: string;
  context?: string;
};

export default function SubmoduleBackButton({ to, label, context = "Submódulo" }: SubmoduleBackButtonProps) {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <Link
        to={to}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-glass-border bg-primary/45 px-5 py-3 text-sm font-bold text-foreground/85 shadow-[0_0_18px_rgba(6,182,212,0.08)] transition-all hover:border-accent/50 hover:bg-primary/70 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
      >
        <ArrowLeft className="w-4 h-4 text-accent" aria-hidden="true" />
        {label}
      </Link>
      <span className="hidden sm:inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
        {context}
      </span>
    </div>
  );
}
