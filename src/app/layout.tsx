import Layout from "@/components/Layout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio with Next.Js",
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
  },
  authors: {
    name: "Muhammad Hasan Syafi'i",
    url: "https://github.com/MasaSensei",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative bg-bg-image flex w-full flex-col items-center justify-between lg:py-24 lg:px-20 p-5">
          <div className="bg-gray-900 flex top-0 left-0 right-0 w-full h-full absolute z-10 opacity-90"></div>
          {children}
          <Layout.Navbar />
        </main>
      </body>
    </html>
  );
}
