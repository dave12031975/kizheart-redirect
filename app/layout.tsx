import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIZHEART ist umgezogen | daveandtabea.de",
  description: "KIZHEART ist jetzt daveandtabea.de - Urban Kiz & Kizomba Tanzschule in Neu-Ulm",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased bg-black text-white`}>
        {children}
        <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-gray-500 bg-black/80 backdrop-blur-sm">
          <div className="flex justify-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
