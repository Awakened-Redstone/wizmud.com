import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizmud",
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
        <footer className={"flex flex-col items-center justify-between text-center glow tracking-normal text-red"}>
          <div className={"text-4xl"}>:::TRUST COMMUNICATION:::</div>
          This website is NOT associated with or owned by hackmud or PirateSoftware
        </footer>
      </body>
    </html>
  );
}
