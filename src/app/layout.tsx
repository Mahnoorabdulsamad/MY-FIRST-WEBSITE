import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Component/footer";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Testimonial from "./Component/Testimonial";
import { Roboto } from "next/font/google";

const myfont = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myfont.className}>
        <Navbar />
        {children}
        <Hero />

        <Testimonial />
        <Footer />
      </body>
    </html>
  );
}
