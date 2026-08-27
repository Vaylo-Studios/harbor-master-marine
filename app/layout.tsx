import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Harbor Master Marine | Mobile Marine Electrical Repair, Dunedin & Pinellas County",
  description:
    "Mobile 12-volt marine electrical repair serving Dunedin and Pinellas County. Wiring, batteries, starters, GPS, and marine electronics, diagnosed and fixed at your dock.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
