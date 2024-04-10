import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brett Perry | Software Engineer",
  description: "Software Engineer for hire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black">
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
