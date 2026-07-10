import { MotionEffect } from "@/components/effects/motion-effect";

export const Footer = () => {
  return (
    <MotionEffect
      slide={{
        direction: "down",
      }}
      fade
      zoom
      delay={1.6}
    >
      <div className="w-full">
        <div className="mx-auto h-16 max-w-7xl">
          <div className="prose prose-sm text-muted-foreground flex size-full items-center justify-center px-4 text-sm md:px-6">
            <p className="truncate text-center">
              Built by{" "}
              <a
                href="https://x.com/x_vasudev"
                rel="noopener noreferrer"
                target="_blank"
                className="text-foreground/90 hover:text-foreground/80"
              >
                vloct
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/vl0ct"
                rel="noopener noreferrer"
                target="_blank"
                className="text-foreground/90 hover:text-foreground/80"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </MotionEffect>
  );
};
