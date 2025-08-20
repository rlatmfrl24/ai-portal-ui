import PlaygroundImage from "@/app/asset/first_1.svg";
import ArrowRight from "@/public/icon_next_arrow.svg";
import Link from "next/link";

export default function FirstSection() {
  return (
    <div className="w-full h-[516px] mt-[160px] mb-[240px] flex justify-center items-center gap-12">
      <PlaygroundImage />
      <div className="flex flex-col h-full py-6">
        <span className="text-xl w-fit font-bold bg-linear-to-r from-red-63 from-10% to-blue-66 to-90% text-transparent bg-clip-text">
          PLAYGROUND
        </span>
        <span className="text-7xl font-bold text-black mt-4">
          Intelligent Logistics
        </span>
        <span className="text-6xl italic text-black">Document Automation</span>
        <p className="text-2xl text-black mt-10 flex-1">
          Transform your complex logistics paperwork into verified, actionable
          <br />
          data with a single solution that combines flexible multi-channel
          <br />
          input, AI-powered recognition, intelligent data extraction, and an
          <br />
          interactive verification experience you can customize to your needs
        </p>
        <Link href="/playground" className="z-10">
          <button className="w-fit p-5 text-xl bg-black text-white rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-black/80 active:bg-black/90">
            <span>Get Started</span>
            <ArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
