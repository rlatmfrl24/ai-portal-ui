import RightArrow from "@/public/icon_next_arrow.svg";
import Background from "@/app/asset/sixth_bg.svg";
import Link from "next/link";
import Ribbon from "@/app/asset/sixth_1.svg";

export default function SixthSection() {
  return (
    <div className="bg-black py-60 rounded-t-[60px] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      <div className="relative h-fit flex flex-col items-center z-10">
        <span className="text-7xl font-bold text-white">Start your AIU</span>
        <Link href="/">
          <button className="bg-white flex items-center gap-2 p-4 rounded-2xl mt-14 cursor-pointer">
            Get Started
            <RightArrow />
          </button>
        </Link>
        <Ribbon />
      </div>
    </div>
  );
}
