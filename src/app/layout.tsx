import type { Metadata } from "next";
import {Josefin_Sans} from "next/font/google";
import "./globals.css";
import { Header } from "./header";

const josefin = Josefin_Sans({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jose',
});

export const metadata: Metadata = {
  title: "Trícia Sowza- Developer",
  description: "Portifolio Trícia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gradient-to-r from-slate-950 from-10% via-slate-950 via-30% to-slate-950 to-90%  text-slate-500`}
      >
         <Header />
         {children}
      </body>
    </html>
  );
}
