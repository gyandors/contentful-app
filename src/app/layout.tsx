import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contentful",
  description: "Contentful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
