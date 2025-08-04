import FirstSection from "./section/first";
import SecondSection from "./section/second";
import ThirdSection from "./section/third";

export default function Introduction() {
  return (
    <div className="w-full">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
