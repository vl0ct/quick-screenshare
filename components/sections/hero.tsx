import { SplittingText } from "@/components/texts/splitting";
import ReactIcon from "@/components/icons/react-icon";
import TSIcon from "@/components/icons/ts-icon";
import TailwindIcon from "@/components/icons/tailwind-icon";
import MotionIcon from "@/components/icons/motion-icon";
import ShadcnIcon from "@/components/icons/shadcn-icon";
import WebrtcIcon from "../icons/webrtc-icon";
import Link from "next/link";
import { MotionEffect } from "@/components/effects/motion-effect";


const ICONS = [ReactIcon, TSIcon, TailwindIcon, MotionIcon, ShadcnIcon, WebrtcIcon];
const TITLE = "Built For Quick Screen Sharing";

export const Hero = () => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden px-5">
      <div className="z-10 flex flex-col items-center justify-center pt-30">
        <MotionEffect
          slide={{
            direction: "down",
          }}
          fade
          zoom
          inView
        >
          <div className="bg-accent mb-8 flex items-center gap-2 rounded-full py-1 pr-3 pl-1 text-sm">
            <Link
              href="/"
              className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
            >
              <span className="bg-primary text-primary-foreground flex h-6 items-center justify-center gap-1 rounded-full px-2 text-xs">
                WebRTC
              </span>{" "}
              <span>Browser Based</span>
            </Link>
          </div>
        </MotionEffect>

        <MotionEffect
          slide={{
            direction: "down",
          }}
          fade
          zoom
          inView
          delay={0.15}
        >
          <div className="relative z-10">
            <h1 className="max-w-[320px] md:max-w-[800px]">
              <SplittingText
                text={TITLE}
                aria-hidden="true"
                className="block text-center text-4xl font-medium text-neutral-200 md:text-5xl dark:text-neutral-800"
                disableAnimation
              />
            </h1>
            <div className="absolute inset-0 flex max-w-[320px] items-center justify-center md:max-w-[800px]">
              <SplittingText
                text={TITLE}
                className="block text-center text-4xl font-medium md:text-5xl"
                type="chars"
                delay={400}
                initial={{ y: 0, opacity: 0, x: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </MotionEffect>

        <MotionEffect
          slide={{
            direction: "down",
          }}
          fade
          zoom
          inView
          delay={0.3}
        >
          <p className="text-muted-foreground mt-3 block max-w-[320px] text-center text-sm font-normal text-balance sm:max-w-[450px] sm:text-base md:max-w-[660px] md:text-lg">
            Create, join, and share your screen with others in real-time without
            friction.
          </p>
        </MotionEffect>

        <div className="flex items-center gap-4 justify-center sm:justify-start py-8">
          {ICONS.map((Icon, index) => (
            <MotionEffect
              key={index}
              slide={{
                direction: 'down',
              }}
              fade
              zoom
              delay={0.75 + index * 0.1}
            >
              <Icon className="size-8" />
            </MotionEffect>
          ))}
        </div>
      </div>
    </div>
  );
};
