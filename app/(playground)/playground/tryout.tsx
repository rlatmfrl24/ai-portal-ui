"use client";

import Button from "@/app/components/Button";
import UploadIcon from "@/public/icon_upload.svg";
import CheckIcon from "@/public/icon_check.svg";
import { useState } from "react";

export default function TryOut() {
  const pdfItems = [
    {
      id: "sample1",
      name: "Sample 1",
    },
    {
      id: "sample2",
      name: "Sample 2",
    },
    {
      id: "sample3",
      name: "Sample 3",
    },
  ];

  const [selectedItem, setSelectedItem] = useState<string | null>(
    pdfItems[0].id
  );

  return (
    <div className="flex h-full">
      <div className="w-1/2 border-r border-gray-200 flex flex-col px-6 py-4 gap-2">
        <div className="flex items-center">
          <button className="flex items-center gap-2 text-black cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-1">
            <UploadIcon />
            File Upload
          </button>
          <div aria-label="divider" className="w-px h-6 bg-gray-200 mx-4" />
          <div className="flex gap-2">
            {pdfItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                variant={selectedItem === item.id ? "contained" : "outlined"}
                backgroundColor={
                  selectedItem === item.id ? "#EF7953" : "transparent"
                }
                className="flex items-center gap-1"
              >
                {selectedItem === item.id ? <CheckIcon /> : null}
                {item.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-1 bg-gray-100 rounded-lg"></div>
      </div>
      <div className="w-1/2">2</div>
    </div>
  );
}
