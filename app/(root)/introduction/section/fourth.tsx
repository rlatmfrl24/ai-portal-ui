import FirstSchema from "@/app/asset/fourth_1.svg";
import SecondSchema from "@/app/asset/fourth_2.svg";
import GradientText from "@/app/components/GradientText";
import FirstBackground from "@/app/asset/fourth_bg_1.svg";
import SecondBackground from "@/app/asset/fourth_bg_2.svg";

export default function FourthSection() {
  return (
    <div className="flex flex-col items-center py-40 relative">
      <div className="absolute top-[900px] left-0">
        <FirstBackground />
      </div>
      <div className="absolute top-[1400px] right-0">
        <SecondBackground />
      </div>
      <GradientText className="text-[22px] font-bold mb-6">
        CONFIGURATION
      </GradientText>
      <span className="text-7xl font-bold text-black">
        Intelligent Logistics
      </span>
      <span className="text-[60px] italic text-black">
        Document Data Extraction
      </span>
      <p className="text-balance text-[22px] w-7xl text-center mt-10 mb-16">
        Transform your complex logistics paperwork into verified, actionable
        data with a single solution that combines flexible multi-channel input,
        AI-powered recognition, intelligent data extraction, and an interactive
        verification experience you can customize to your needs
      </p>
      <FirstSchema />
      <GradientText className="text-[22px] font-bold mb-6 mt-40">
        CONFIGURATION
      </GradientText>
      <span className="text-7xl font-bold text-black">Interactive</span>
      <span className="text-[60px] italic text-black">
        Data Review & Verification
      </span>
      <p className="text-balance text-[22px] w-7xl text-center mt-10 mb-16">
        Transform your complex logistics paperwork into verified, actionable
        data with a single solution that combines flexible multi-channel input,
        AI-powered recognition, intelligent data extraction, and an interactive
        verification experience you can customize to your needs
      </p>
      <SecondSchema />
    </div>
  );
}
