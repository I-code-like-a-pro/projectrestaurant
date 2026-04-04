import "./css/globals.css";
import Navbar from "./components/Navbar"
import { SanityLive } from "@/sanity/lib/live";
import Footer from "./components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-dark-bg">
        <Navbar/>
        {children}
        <Footer/>
        <SanityLive/>
        </body>
    </html>
  );
}
