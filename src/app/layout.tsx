import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sterling & Stone",
  description: "Sterling & Stone landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/hero.jpg" />
        <link rel="preload" as="image" href="/projects/hero-projects.jpg" />
        <link rel="preload" as="image" href="/hero-contact.jpg" />
      </head>
      <body className="bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
