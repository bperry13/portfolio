import "./globals.css";
import { Cormorant } from "next/font/google";

const font = Cormorant({ subsets: ["latin"] });

export const metadata = {
  title: "Brett Perry | Software Engineer",
  description: "Next.js React JavaScript Portfolio by Brett Perry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
