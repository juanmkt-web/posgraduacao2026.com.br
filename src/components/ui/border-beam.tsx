import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  colorFrom = "hsl(var(--primary))",
  colorTo = "hsl(var(--accent))",
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--delay": delay,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit]",
          "before:absolute before:aspect-square before:w-[calc(var(--size)*1px)]",
          "before:animate-border-beam before:[animation-delay:var(--delay)]",
          "before:[animation-duration:calc(var(--duration)*1s)]",
          "before:[background:linear-gradient(to_right,var(--color-from),var(--color-to),transparent)]",
          "before:[offset-anchor:calc(var(--size)*0.5px)_calc(var(--size)*0.5px)]",
          "before:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*0.5px))]"
        )}
      />
    </div>
  );
};
