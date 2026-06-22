import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("flex flex-col space-y-2 mb-12", className)}>
      {subtitle && (
        <span className="text-sm font-medium tracking-wider text-accent-primary uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-main">
        {title}
      </h2>
    </div>
  );
}
