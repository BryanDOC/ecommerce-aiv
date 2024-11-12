import type { Metadata } from "next";

import { Inter } from 'next/font/google'
import "./globals.css";
import Navbarpage from "@/components/Navbarpage";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: "Agroindustria Independiente del valle E.I.R.L",
  description: "Bienvenido al ecommerce de Agroindustria Independiente del valle E.I.R.L",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
       <Navbarpage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
