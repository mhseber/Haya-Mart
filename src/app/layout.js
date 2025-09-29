import { Geist,  Bitcount, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

const bitcount = Bitcount({
  weight: ['400','700'],
  subsets: ['latin']
})

export const metadata = {
  title: 
  {
    default:"StreetAura",
   template: "%s || Learn Next.js"
    },
    keywords: ['Next.js', 'React', 'JavaScript', 'playground','Learning'],
  description: "Try to learn Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bitcount.className}antialiased bg-slate-200 min-h-screen`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
