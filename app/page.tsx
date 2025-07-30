import Button from "@/app/component/Button";
import ArrowRight from "@/public/icon_left_arrow.svg?url";
import Image from "next/image";
import ShippingInstruction from "@/public/img_shipping_instruction.svg?url";
import Invoice from "@/public/img_invoice.svg?url";
import Msds from "@/public/img_msds.svg?url";
import Mnr from "@/public/img_mnr.svg?url";

export default function Home() {
  return (
    <div>
      <div className="flex container mx-auto gap-8">
        <OCRItem
          imageUrl={ShippingInstruction}
          title="Shipping Instruction"
          description="Extracts data from Ocean Carrier SI documents."
        />
        <OCRItem
          imageUrl={Invoice}
          title="Shipping Instruction"
          description="Extracts data from Ocean Carrier SI documents."
        />
        <OCRItem
          imageUrl={Msds}
          title="Shipping Instruction"
          description="Extracts data from Ocean Carrier SI documents."
        />
        <OCRItem
          imageUrl={Mnr}
          title="Shipping Instruction"
          description="Extracts data from Ocean Carrier SI documents."
        />
      </div>
    </div>
  );
}

function OCRItem({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div
      className="flex flex-col items-center p-4 rounded-3xl mt-4"
      style={{
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.04), 0 0 6px 0 rgba(0, 0, 0, 0.08), 0 4px 12px 0 rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="self-end border px-2 py-1 rounded-lg leading-4 font-medium">
        OCR
      </div>
      <Image src={imageUrl} alt={title} />
      <span className="text-2xl font-bold text-black mt-3 mb-4">{title}</span>
      <span className="text-center text-balance text-[18px] mb-12">
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
