// app/layout.js
import "./css/globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Provider } from "../components/ui/provider";
import SanityLiveWrapper from "./component/SanityLiveWrapper";
import EmotionRegistry from "./component/EmotionRegistry";  // ← add this

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-dark-bg"
        suppressHydrationWarning
      >
        <EmotionRegistry>  {/* ← wrap Provider with this */}
          <Provider>
            <Navbar />
            <main className="flex-1 bg-dark-bg">{children}</main>
            <Footer />
          </Provider>
        </EmotionRegistry>
        <SanityLiveWrapper />
      </body>
    </html>
  );
}