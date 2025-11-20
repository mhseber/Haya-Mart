import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Noto_Serif } from "next/font/google";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});



export const metadata = {
  title: 
  {
    default:"Haya Mart",
   template: "%s | Haya Mart"
    },
    keywords: ['Next.js', 'React', 'JavaScript', 'playground','Learning'],
  description: "Islamic Clothing Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
      <body
        className={`${notoSerif.className} antialiased  min-h-screen`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
      </NextAuthSessionProvider>
    </html>
  );
}
