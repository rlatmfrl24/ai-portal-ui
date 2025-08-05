import FirstSection from "./section/first";
import SecondSection from "./section/second";
import ThirdSection from "./section/third";
import FourthSection from "./section/fourth";
import FifthSection from "./section/fifth";
import SixthSection from "./section/sixth";

export default function Introduction() {
  return (
    <div className="w-full">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
