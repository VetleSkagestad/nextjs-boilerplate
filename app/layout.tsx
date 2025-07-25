import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import Menu from "./menu";

const inter = Inter({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'] })

export const metadata: Metadata = {
  title: "GameDev Syndicate",
  description: "A collective for game developers by game developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* A fixed-height, sticky menu */}
        <header className="sticky top-0 z-50 h-15 inter.className">
          {/* <Menu /> */}
        </header>

        {/* Push everything down by 4rem (h-16) */}
        <main className="inter.className">
          {children}
        </main>
      </body>
    </html>
  );
}
