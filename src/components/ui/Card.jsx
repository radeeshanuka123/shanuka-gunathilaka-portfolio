import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-accent-primary/30", className)}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";
