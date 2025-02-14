import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import EasterEggs  from "@/components/ui/easter-egg";
import Preloader from "@/components/preloader";
import ElasticCursor from "@/components/ui/ElasticCursor";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyansh's Portfolio",
  description: "Modern & Minimilist Priyansh's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Preloader>
              <ElasticCursor/>
            <EasterEggs />
            </Preloader>
          </ThemeProvider>
      </body>
    </html>
  );
}
