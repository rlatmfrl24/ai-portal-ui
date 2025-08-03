import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI Portal",
  description: "AI Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen w-full`}>
        <div className="min-h-screen w-full flex flex-col">
          {/* 메인 콘텐츠 영역 - 스크롤 가능 */}
          <main className="flex-1 w-full flex justify-center">
            <div className="w-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
