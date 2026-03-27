import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* Visible on every page */}
        <main>{children}</main> {/* This is where Home, About, etc. swap out */}
        <Footer />  {/* Visible on every page */}
      </body>
    </html>
  );
}