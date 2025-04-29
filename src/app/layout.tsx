import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Joy-Verse",
  description: "Created by Joyant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/joy.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </head>
      <body className={twMerge("bg-gray-900 text-white antialiased font-sans", "font-sans")}>
          {children}
      </body>
    </html>
  );
}
