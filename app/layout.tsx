import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Micro_5,
  Anonymous_Pro,
  Tiny5,
} from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const micro5 = Micro_5({
  variable: "--font-micro-5",
  subsets: ["latin"],
  weight: "400",
});
const tiny5 = Tiny5({
  variable: "--font-tiny-5",
  subsets: ["latin"],
  weight: "400",
});

const anonymousPro = Anonymous_Pro({
  variable: "--font-anonymous-pro",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "bbeg.games",
  description: "BBEG: Villainous Creator Collective",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${micro5.variable} ${tiny5.variable}  ${anonymousPro.variable}`}
      >
        <Theme appearance="dark" accentColor="ruby">
          {children}
        </Theme>
      </body>
    </html>
  );
}
