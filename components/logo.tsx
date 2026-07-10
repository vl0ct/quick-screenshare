"use client";

import { cn } from "@/lib/utils";
import { motion, type SVGMotionProps } from "motion/react";

const pathVariants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
} as const;

const sizes = {
  xs: "h-5.5",
  sm: "h-7",
  md: "h-8",
  lg: "h-12",
  xl: "h-14",
};

// Each shape from the logo mark. Squares get a stroke so the draw-in
// animation reveals an outline before the fill settles in; the two
// rounded corner pieces are fill-only (no stroke duplicate in the source).
const logoPaths = [
  { d: "M 360 360 L 420 360 L 420 420 L 360 420 Z", stroke: true },
  {
    d: "M 420 360 L 420.00006 360 A 59.99993999999998 59.99993999999998 0 0 1 480 419.99994 L 480 420 L 420 420 L 420 360 Z",
    stroke: false,
  },
  { d: "M 300 360 L 360 360 L 360 420 L 300 420 Z", stroke: true },
  { d: "M 360 420 L 420 420 L 420 480 L 360 480 Z", stroke: true },
  { d: "M 420 420 L 480 420 L 480 480 L 420 480 Z", stroke: true },
  {
    d: "M 300 420 L 360 420 L 360 480 L 359.99994 480 A 59.99993999999998 59.99993999999998 0 0 1 300 420.00006 L 300 420 Z",
    stroke: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const Logo = ({
  draw = false,
  size = "sm",
  className,
  containerClassName,
  ...props
}: {
  containerClassName?: string;
  draw?: boolean;
  size?: keyof typeof sizes;
} & SVGMotionProps<SVGSVGElement>) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="276 336 228 168"
        className={cn(sizes[size], className)}
        variants={draw ? containerVariants : {}}
        initial={draw ? "hidden" : false}
        animate={draw ? "visible" : false}
        {...props}
      >
        {logoPaths.map((path, i) => (
          <motion.path
            key={i}
            variants={draw ? pathVariants : {}}
            stroke={path.stroke ? "currentColor" : "none"}
            strokeWidth={path.stroke ? 20 : 0}
            strokeLinejoin="round"
            strokeLinecap="butt"
            className="fill-neutral-900 dark:fill-neutral-100"
            d={path.d}
          />
        ))}
      </motion.svg>

      <span className="sr-only">your-logo</span>
    </div>
  );
};
