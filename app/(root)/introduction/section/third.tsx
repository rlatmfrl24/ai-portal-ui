import Third1 from "@/app/asset/third_1.svg";
import Third2 from "@/app/asset/third_2.svg";
import Third3 from "@/app/asset/third_3.svg";
import ThirdLogo from "@/app/asset/third_logo.svg";

export default function ThirdSection() {
  return (
    <div className="w-full h-fit bg-black mt-60 py-60 rounded-t-[60px] flex flex-col items-center">
      <Third1 />
      <ThirdLogo />
      <Third2 />
      <Third3 />
    </div>
  );
}
