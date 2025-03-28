import "../styles/globals.scss";
import Head from "next/head";
import { ThemeProvider } from "./components/ThemeProvider";

import Navbar from "./components/Nav/Nav";

export const metadata = {
  title: "Riley Uy - Portfolio",
  description: "Fullstack developer from the Philippines",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="fixed inset-0 bg-gradient-to-b from-hero-green to-hero-yellow before:absolute before:inset-0 before:bg-[url('/noisy.jpg')] before:opacity-20 before:pointer-events-none" />
          <main className="py-12 md:py-24 min-h-screen flex flex-col relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
