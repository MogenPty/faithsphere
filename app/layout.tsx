import { StackProvider, StackTheme } from "@stackframe/stack";
import type { Metadata } from "next";
import { Crimson_Text, Lato } from "next/font/google";
import { stackClientApp } from "../stack/client";
import "./globals.css";

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FaithSphere",
  description: "Faith-based community management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-lt-installed={true}>
      <body className={`${crimsonText.variable} ${lato.variable} antialiased`}>
        <StackProvider app={stackClientApp}>
          <StackTheme>{children}</StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
