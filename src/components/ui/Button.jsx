import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button";
  
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-accent-primary text-white hover:bg-accent-primary/90 shadow-sm hover:shadow-md",
    secondary: "bg-secondary text-text-main border border-border-subtle hover:bg-border-subtle/50 shadow-sm hover:shadow-md",
    outline: "border border-accent-primary text-accent-primary hover:bg-accent-primary/10",
    ghost: "hover:bg-border-subtle/50 text-text-main hover:text-accent-primary",
    link: "underline-offset-4 hover:underline text-accent-primary",
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  return (
    <Comp
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
