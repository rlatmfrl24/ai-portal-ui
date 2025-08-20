import Logo from "@/public/logo.svg";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* 고정 헤더 */}
      <header className="sticky top-0 z-50 h-16 w-full flex justify-center items-center bg-[#F5F5F4]">
        <div className="container mx-auto flex items-center gap-6 justify-between">
          <div className="flex items-center gap-6">
            <Logo width={66} height={32} />
            <Link href="/introduction">Introduction</Link>
            <span className="cursor-pointer">Pricing</span>
            <span className="cursor-pointer">Management</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outlined">Contact Sales</Button>
            <Button variant="contained">Sign In</Button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 - 스크롤 가능 */}
      <div className="flex-1 w-full flex justify-center">{children}</div>
    </div>
  );
}
