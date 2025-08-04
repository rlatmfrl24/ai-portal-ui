import Button from "@/app/components/Button";
import ArrowRight from "@/public/icon_next_arrow.svg";
import ShippingInstruction from "@/public/img_shipping_instruction.svg";
import Invoice from "@/public/img_invoice.svg";
import Msds from "@/public/img_msds.svg";
import Mnr from "@/public/img_mnr.svg";
import CustomSlider from "./Slider";
import Slider1Image from "@/public/img_document_data_extraction.svg";
import Slider2Image from "@/public/img_slide_mnr.svg";

// 슬라이더 데이터
const SLIDER_DATA = [
  {
    title: "Intelligent Logistics",
    subtitle: "Document Data Extraction",
    bgColor: "#4e4d80",
    image: <Slider1Image />,
    imageClassName: "self-end",
  },
  {
    title: "Presize M&R Service",
    subtitle: "with AI-based OCR",
    bgColor: "#E86940",
    image: <Slider2Image />,
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
    image: <ShippingInstruction />,
    title: "Shipping Instruction",
    description: "Extracts data from Ocean Carrier SI documents.",
  },
  {
    image: <Invoice />,
    title: "Invoice",
    description: "Extracts data from Terminal Invoice documents.",
  },
  {
    image: <Msds />,
    title: "MSDS",
    description: "Extracts data from Material Safety Data Sheet documents.",
  },
  {
    image: <Mnr />,
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
                  <div className={slide.imageClassName}>{slide.image}</div>
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
            image={item.image}
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
  image: React.ReactNode;
}

function OCRItem({ title, description, image }: OCRItemProps) {
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
        <Button variant="contained" className="flex-1">
          <span className="flex items-center gap-2 whitespace-nowrap justify-center">
            Go to Playground
            <ArrowRight />
          </span>
        </Button>
      </div>
    </div>
  );
}
