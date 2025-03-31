import type { Metadata } from "next";
import { Poppins, Barlow } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homecroo – Sales, Marketing & Software Solutions for Cleaning Businesses",
  description: "We can help you operate a profitable cleaning business with proven admin tools & solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${barlow.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
