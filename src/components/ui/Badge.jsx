import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default", className }) {
  const variants = {
    default: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
    secondary: "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
    success: "bg-success/10 text-success border-success/20",
    outline: "border-border-subtle text-text-muted",
  };

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors", variants[variant], className)}>
      {children}
    </span>
  );
}
