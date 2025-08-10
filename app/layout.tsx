import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameDev Syndicate",
  description: "A collective of indie studios uniting to build the future of games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="container">
            <div className="logo-text"><a href="/">GameDev Syndicate</a></div>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>
        {children}
        <footer>
          <p>&copy; {year} GameDev Syndicate. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
