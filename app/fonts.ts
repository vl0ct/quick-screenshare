import { Geist, Lora, Fira_Code, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const fontMono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});