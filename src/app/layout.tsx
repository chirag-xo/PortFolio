import type { Metadata } from "next";
import "./globals.css";

import { Inter, Calistoga, Host_Grotesk } from "next/font/google";
import { twMerge } from "tailwind-merge";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const hostGrotesk = Host_Grotesk({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});

export const metadata: Metadata = {
  title: "Chirag Sachdeva — Software Engineer | Frontend Developer",
  description: "Creative Frontend Developer",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          hostGrotesk.variable,
          "bg-gray-950 text-white font-sans"
        )}
      >
        <ActiveSectionContextProvider>{children}
          <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
