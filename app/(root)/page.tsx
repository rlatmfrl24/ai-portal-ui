import Button from "@/app/components/Button";
import ArrowRight from "@/public/icon_next_arrow.svg?url";
import Image from "next/image";
import ShippingInstruction from "@/public/img_shipping_instruction.svg?url";
import Invoice from "@/public/img_invoice.svg?url";
import Msds from "@/public/img_msds.svg?url";
import Mnr from "@/public/img_mnr.svg?url";
import CustomSlider from "./Slider";
import Slider1Image from "@/public/img_document_data_extraction.svg";
import Slider2Image from "@/public/img_slide_mnr.svg";

// 슬라이더 데이터
const SLIDER_DATA = [
  {
    title: "Intelligent Logistics",
    subtitle: "Document Data Extraction",
    bgColor: "#4e4d80",
    image: Slider1Image,
    imageClassName: "self-end",
  },
  {
    title: "Presize M&R Service",
    subtitle: "with AI-based OCR",
    bgColor: "#E86940",
    image: Slider2Image,
    imageClassName: "self-end translate-x-10",
  },
  {
    title: "Carousel Test",
    subtitle: "Green Slide Example",
    bgColor: "rgb(22, 163, 74)", // green-600
    image: null,
    imageClassName: "",
  },
] as const;

// OCR 아이템 데이터
const OCR_ITEMS = [
  {
    imageUrl: ShippingInstruction,
    title: "Shipping Instruction",
    description: "Extracts data from Ocean Carrier SI documents.",
  },
  {
    imageUrl: Invoice,
    title: "Invoice",
    description: "Extracts data from Terminal Invoice documents.",
  },
  {
    imageUrl: Msds,
    title: "MSDS",
    description: "Extracts data from Material Safety Data Sheet documents.",
  },
  {
    imageUrl: Mnr,
    title: "M&R",
    description: "Extracts data from Manifest & Receipt documents.",
  },
] as const;

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
                {slide.image && (
                  <Image
                    src={slide.image}
                    alt={`slider-${index + 1}`}
                    className={slide.imageClassName}
                  />
                )}
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
      <div className="flex container mx-auto gap-8 mt-10">
        {OCR_ITEMS.map((item) => (
          <OCRItem
            key={item.title}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

interface OCRItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

function OCRItem({ title, description, imageUrl }: OCRItemProps) {
  return (
    <div className="flex flex-1 flex-col items-center p-4 rounded-3xl mt-4 shadow-2">
      <div className="self-end border px-2 py-1 rounded-lg leading-4 font-medium">
        OCR
      </div>
      <Image src={imageUrl} alt={title} />
      <span className="text-2xl font-bold text-black mt-3 mb-4">{title}</span>
      <span className="text-center text-balance text-lg mb-12">
        {description}
      </span>
      <div className="flex gap-2 w-full">
        <Button>Subscribe</Button>
        <Button variant="contained" className="flex-1">
          <span className="flex items-center gap-2 whitespace-nowrap justify-center">
            Go to Playground
            <Image src={ArrowRight} alt="arrow-right" />
          </span>
        </Button>
      </div>
    </div>
  );
}
