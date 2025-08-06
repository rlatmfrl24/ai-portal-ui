import Button from "@/app/components/Button";
import ArrowRight from "@/public/icon_next_arrow.svg";
import ShippingInstruction from "@/public/img_shipping_instruction.svg";
import Invoice from "@/public/img_invoice.svg";
import Msds from "@/public/img_msds.svg";
import Mnr from "@/public/img_mnr.svg";
import CustomSlider from "./Slider";
import Slider1Image from "@/public/img_document_data_extraction.svg";
import Slider2Image from "@/public/img_slide_mnr.svg";
import Link from "next/link";
import { OCR_ITEMS, SLIDER_DATA } from "@/constants/root";

function getSliderImage(id: string) {
  switch (id) {
    case "slider-1":
      return <Slider1Image />;
    case "slider-2":
      return <Slider2Image />;
    default:
      return null;
  }
}

function getOCRImage(id: string) {
  switch (id) {
    case "shipping-instruction":
      return <ShippingInstruction />;
    case "invoice":
      return <Invoice />;
    case "msds":
      return <Msds />;
    case "mnr":
      return <Mnr />;
  }
}

export default function Home() {
  return (
    <div>
      <div className="container mx-auto mt-4">
        <CustomSlider>
          {SLIDER_DATA.map((slide, index) => (
            <div key={index}>
              <div
                className="h-[376px] w-full p-10 rounded-3xl shadow-2 flex flex-col my-2"
                style={{ backgroundColor: slide.bgColor }}
              >
                <span className="text-3xl italic text-[#C2C2CF]">
                  {slide.title}
                </span>
                <span className="text-4xl font-bold text-white">
                  {slide.subtitle}
                </span>
                <div className={slide.imageClassName}>
                  {getSliderImage(slide.id)}
                </div>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
      <div className="flex container mx-auto gap-8 mt-10">
        {OCR_ITEMS.map((item) => (
          <OCRItem
            key={item.id}
            id={item.id}
            image={getOCRImage(item.id)}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

interface OCRItemProps {
  id: string;
  title: string;
  description: string;
  image: React.ReactNode;
}

function OCRItem({ id, title, description, image }: OCRItemProps) {
  return (
    <div className="flex flex-1 flex-col items-center p-4 rounded-3xl mt-4 shadow-2">
      <div className="self-end border px-2 py-1 rounded-lg leading-4 font-medium">
        OCR
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {image}
      </div>
      <span className="text-2xl font-bold text-black mt-3 mb-4">{title}</span>
      <span className="text-center text-balance text-lg mb-12">
        {description}
      </span>
      <div className="flex gap-2 w-full">
        <Button>Subscribe</Button>
        <Link href={`/playground?id=${id}`} className="flex-1">
          <Button variant="contained" className="w-full">
            <span className="flex items-center gap-2 whitespace-nowrap justify-center">
              Go to Playground
              <ArrowRight />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
