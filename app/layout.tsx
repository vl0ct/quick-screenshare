import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Lora, Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const metadata = {
  title: "Screen Share - Share Your Screen Instantly",
  description:
    "Share your screen instantly with anyone using a simple room code. No downloads or sign-ups required.",
  keywords: [
    "screen sharing",
    "webrtc",
    "online screen share",
    "browser screen sharing",
    "free screen sharing",
    "share your screen",
    "share screen",
    "screen share",
  ],
  // other: {
  //     "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ""
  // }
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body
        className={`${inter.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
