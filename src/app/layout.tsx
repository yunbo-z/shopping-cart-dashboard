import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainHeader } from "./components/Header/MainHeader";
import Footer from "./components/Footer/Footer";
import React, { FC } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dahboard Web",
  description: "A dashboard for the shopping website",
};

interface RootLayoutProps {
  children: React.ReactNode,
  dashboard: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children, dashboard }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className="min-h-screen flex flex-col text-black">
        <MainHeader></MainHeader>
        <div className="grow">
          {children}
          {dashboard}
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
export default RootLayout;
