import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] });
const robotoMono = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dariel Portfolio ",
  description: "created by git-dariel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me.png" sizes="any" />
      </head>
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
