import { Inter } from "next/font/google";
import "./globals.css";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AEF Motorsport",
  description: "Oferim servicii de reparații auto pentru gama Dacia-Renault și intervenții de orice fel, de la cele mecanice la schimbarea anvelopelor, pentru a oferi cele mai bune servicii la prețul corect.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#d60d18"/>
    <body className="bg-white">
        <Header2/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
