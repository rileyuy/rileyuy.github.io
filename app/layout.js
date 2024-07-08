"use client";

import "../styles/globals.scss";

import { Nav } from "./components/Nav/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
