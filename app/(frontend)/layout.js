import { SanityLive } from "@/sanity/lib/live";
export default function RootLayout({ children }) {
  return (
    <html
      lang="en" 
    >
      <body className="min-h-full flex flex-col">{children}
         <SanityLive/>
      </body>
     

    </html>
  );
}
