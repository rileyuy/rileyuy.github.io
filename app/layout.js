"use client";

import "../styles/globals.scss";

import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
