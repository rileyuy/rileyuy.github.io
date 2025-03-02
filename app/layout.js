import "../styles/globals.scss";
import { Inter } from "next/font/google";
import Navbar from "./components/Nav/Nav";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata = {
  title: "Riley Uy - Portfolio",
  description: "Fullstack developer from the Philippines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
