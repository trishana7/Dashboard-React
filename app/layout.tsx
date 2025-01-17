import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import UserInfo from "@/components/UserInfo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vercel",
  description: "Sales record application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <div className="flex">
          <NavBar />
          <div className="w-full">
            <header className="flex justify-end px-8 p-4 lg:p-6 shadow bg-white mb-1 sticky top-0">
              <UserInfo />
            </header>
            <div className="m-5">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
