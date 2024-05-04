import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizmud - Unofficial",
  description: "Unofficial website for wizmud, it contains a library of spells and information",
  robots: {
    index: false,
    follow: false,
    notranslate: true,
    nocache: true,
    nositelinkssearchbox: true,
    indexifembedded: false
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className={"flex flex-col items-center justify-between text-center tracking-normal text-custom-c pt-8"}>
          This website is NOT associated with or owned by hackmud or Thor/PirateSoftware
        </footer>
      </body>
    </html>
  );
}
