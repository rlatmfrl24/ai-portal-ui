"use client";

import { useState } from "react";
import TabButton from "@/app/components/Tab/TabButton";
import TabGroup from "@/app/components/Tab/TabGroup";
import DropdownArrowIcon from "@/public/icon_dropdown_arrow.svg";
import ShippingInstructionsIcon from "@/public/icon_shipping_instruction.svg";
import InvoicesIcon from "@/public/icon_invoice.svg";
import MsdsIcon from "@/public/icon_msds.svg";
import MnrIcon from "@/public/icon_mnr.svg";
import TryOut from "./tryout";

export default function Playground() {
  const playgroundTypes = [
    {
      icon: <ShippingInstructionsIcon />,
      name: "Shipping Instructions",
    },
    {
      icon: <InvoicesIcon />,
      name: "Invoices",
    },
    {
      icon: <MsdsIcon />,
      name: "Material Safety Data Sheet",
    },
    {
      icon: <MnrIcon />,
      name: "M & R",
    },
  ];

  const [currentTab, setCurrentTab] = useState("try-out");
  const [activeMenu, setActiveMenu] = useState(playgroundTypes[0]);

  const handleTabChange = (activeId: string) => {
    setCurrentTab(activeId);
  };

  return (
    <div className="flex w-full flex-1 gap-4">
      <aside className="w-80 h-full shadow-1 rounded-3xl bg-white">
        <div className="p-4">
          <TabGroup activeId="try-out" onChange={handleTabChange}>
            <TabButton id="try-out">Try Out</TabButton>
            <TabButton id="api-spec">API Spec.</TabButton>
          </TabGroup>
        </div>

        <div className="pt-4 pb-10 py-8 flex flex-col border-b border-gray-200">
          <button className="flex items-center justify-center text-[22px] font-bold text-black cursor-pointer pl-4">
            Hutchison Port
            <DropdownArrowIcon />
          </button>
          <span className="flex justify-center w-full text-xs text-gray-500">
            Extracts data from Invoice documents.
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4">
          {playgroundTypes.map((type) => (
            <TryOutMenuButton
              key={type.name}
              icon={type.icon}
              name={type.name}
              active={activeMenu.name === type.name}
              onClick={() => setActiveMenu(type)}
            />
          ))}
        </div>
      </aside>

      <div className="flex-1 border rounded-3xl bg-white">
        {/* 탭에 따른 콘텐츠 렌더링 */}
        {currentTab === "try-out" ? (
          <TryOut />
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">API Spec.</h2>
            <p>여기에 API 스펙 관련 콘텐츠가 표시됩니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}

const TryOutMenuButton = ({
  icon,
  name,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  name: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`flex gap-4 items-center font-semibold cursor-pointer p-4 rounded-lg transition-colors duration-300 ${
        active
          ? "text-black bg-[#EAEAEA]"
          : "text-gray-500 hover:text-black hover:bg-black/10"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
};
