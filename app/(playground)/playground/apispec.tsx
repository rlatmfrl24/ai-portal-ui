"use client";

import GradientText from "@/app/components/GradientText";
import { playgroundTypes } from "@/constants/playground";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserStore } from "@/app/store/user";
import DropdownIcon from "@/public/icon_dropdown_arrow.svg";

export default function ApiSpecification() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [currentSpec, setCurrentSpec] = useState(playgroundTypes[0]);
  const { apiToken } = useUserStore();

  useEffect(() => {
    const spec = playgroundTypes.find((spec) => spec.id === id);
    if (spec) {
      setCurrentSpec(spec);
    }
  }, [id]);

  return (
    <div className="p-6 flex flex-col gap-6 h-full">
      <GradientText className="w-fit text-[22px] font-bold">
        {currentSpec.name}
      </GradientText>
      <div className="border border-[#cfcfcf] px-4 py-3 rounded-xl flex items-center gap-2">
        <ApiTypeChip type={currentSpec.api.requestType as "GET" | "POST"} />
        {currentSpec.api.endpoint}
      </div>
      <div className="border border-[#cfcfcf] p-6 rounded-xl flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-[#f5f5f4] border border-[#cfcfcf] px-4 py-3 flex-1">
            {currentSpec.api.endpoint}
          </div>
          <button className="bg-black text-white px-4 py-3 rounded-xl cursor-pointer">
            Send
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="flex-1 font-semibold">Authorization</div>
            <code className="border border-[#cfcfcf] bg-[#f5f5f4] text-[#686867] px-2 py-1 rounded-lg">
              string
            </code>
          </div>
          <span className="text-black opacity-40">
            The Authorization access token
          </span>
          <div className="rounded-xl border border-[#cfcfcf] px-4 py-3 mt-3">
            {`Bearer ${apiToken}`}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DropdownIcon />
          <span>Body</span>
        </div>
      </div>
    </div>
  );
}

function ApiTypeChip({ type }: { type: "GET" | "POST" }) {
  switch (type) {
    case "GET":
      return (
        <div className="border border-[#586AF5] text-[#586AF5] bg-[#E4E3FF] px-2 py-1 text-sm rounded-lg">
          GET
        </div>
      );
    case "POST":
      return (
        <div className="border border-[#586AF5] text-[#586AF5] bg-[#E4E3FF] px-2 py-1 text-sm rounded-lg">
          POST
        </div>
      );
  }
}
