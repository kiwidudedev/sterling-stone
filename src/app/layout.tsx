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
      <body className="bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
