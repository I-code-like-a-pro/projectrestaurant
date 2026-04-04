import "./css/globals.css";
import Menubar from "./components/Navbar"
import { SanityLive } from "@/sanity/lib/live";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-dark-bg">
        <Menubar/>
        {children}
        <SanityLive/>
        </body>
    </html>
  );
}
