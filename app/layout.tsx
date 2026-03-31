import type { Metadata } from "next"; // Type import karein
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

// Ye section add karein
export const metadata: Metadata = {
  title: "Sankalp Kids Care Academy",
  description: "Nurturing young minds for a better future",
  icons: {
    icon: "/images/logos.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}