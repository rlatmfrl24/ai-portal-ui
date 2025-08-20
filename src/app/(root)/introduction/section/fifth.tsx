import GradientText from "@/app/components/GradientText";
import Image from "next/image";

export default function FifthSection() {
  return (
    <div className="flex flex-col items-center py-40 relative">
      <GradientText className="text-[22px] font-bold mb-6 mt-40">
        PLAYGROUND
      </GradientText>
      <span className="text-7xl font-bold text-black">
        Customizable Interface
      </span>
      <span className="text-[60px] italic text-black">
        Configuration and Playground
      </span>
      <p className="text-balance text-[22px] w-7xl text-center mt-10 mb-16">
        Transform your complex logistics paperwork into verified, actionable
        data with a single solution that combines flexible multi-channel input,
        AI-powered recognition, intelligent data extraction, and an interactive
        verification experience you can customize to your needs
      </p>
      <Image src="/fifth_1.png" alt="interface" width={1344} height={688} />
    </div>
  );
}
