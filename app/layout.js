import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// sets metadata for all pages
export const metadata = {
  title: "Brett Perry | Software Engineer",
  description: "Next.js React JavaScript Portfolio by Brett Perry",
};

// applies globals.css to all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
