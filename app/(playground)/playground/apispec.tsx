"use client";

import GradientText from "@/app/components/GradientText";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SpecList = [
  {
    id: "shipping-instruction",
    name: "Shipping Instruction",
    requestType: "GET",
    requestUrl: "/api/ai/ocr/custom/shipping-instruction",
  },
  {
    id: "invoice",
    name: "Invoice",
    requestType: "GET",
    requestUrl: "/api/ai/ocr/custom/invoice",
  },
  {
    id: "msds",
    name: "Material Safety Data Sheet",
    requestType: "POST",
    requestUrl: "/api/ai/ocr/custom/msds",
  },
  {
    id: "mnr",
    name: "M & R",
    requestType: "POST",
    requestUrl: "/api/ai/ocr/custom/mnr",
  },
];

export default function ApiSpecification() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [currentSpec, setCurrentSpec] = useState(SpecList[0]);

  useEffect(() => {
    const spec = SpecList.find((spec) => spec.id === id);
    if (spec) {
      setCurrentSpec(spec);
    }
  }, [id]);

  return (
    <div className="p-6 flex flex-col gap-6 h-full">
      <GradientText className="w-fit text-[22px] font-bold">
        {currentSpec.name}
      </GradientText>
    </div>
  );
}
