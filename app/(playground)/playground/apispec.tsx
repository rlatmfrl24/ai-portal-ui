"use client";

import GradientText from "@/app/components/GradientText";
import { playgroundTypes } from "@/constants/playground";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserStore } from "@/app/store/user";
import DropdownIcon from "@/public/icon_dropdown_arrow.svg";
import UploadIcon from "@/public/icon_upload.svg";
import SuccessIcon from "@/public/icon_successful.svg";
import SubTitleIcon from "@/public/icon_cross_star.svg";
import styles from "./playground.module.css";
import { classNames } from "@/utils/util";

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
    <div className="h-full flex flex-col ">
      <div className="p-6 flex flex-col gap-6 h-0 flex-auto overflow-auto">
        <GradientText className="w-fit text-[22px] font-bold">
          {currentSpec.name}
        </GradientText>
        <div className={classNames(styles.box, "gap-2")}>
          <ApiTypeChip type={currentSpec.api.requestType as "GET" | "POST"} />
          {currentSpec.api.endpoint}
        </div>
        <div className="flex flex-col gap-6 w-full p-6 border border-[#cfcfcf] rounded-xl">
          <div className="flex items-center gap-2 w-full">
            <div className={classNames(styles.box, "flex-1")}>
              {currentSpec.api.endpoint}
            </div>
            <button className="bg-black text-white px-4 py-3 rounded-xl cursor-pointer">
              Send
            </button>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <div className="flex-1 font-semibold">Authorization</div>
              <code className={classNames(styles.codeChip)}>string</code>
            </div>
            <span className="text-black opacity-40">
              The Authorization access token
            </span>
            <div className={classNames(styles.box, "mt-3")}>
              {`Bearer ${apiToken}`}
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            <DropdownIcon />
            <span className={styles.subTitle}>Body</span>
          </div>
          <div className="flex flex-col w-full gap-2">
            <span className={styles.subTitle}>Document</span>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 border border-[#cfcfcf] px-4 py-3 rounded-lg cursor-pointer">
                <UploadIcon />
                File Upload
              </button>
              <div className={classNames(styles.box, "flex-1")}>
                <span className="text-[#686867]">No file selected</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <span className={styles.subTitle}>Response</span>
            <div className="flex items-center gap-1">
              <SuccessIcon />
              <span>Successful</span>
            </div>
            <code className="bg-[#f5f5f4] border border-[#cfcfcf] px-4 py-3 rounded-lg">
              {`200

{
  "apiVersion": "1.1",
  "confidence": 0.5742,
  "metadata": {
    "pages": [
      {
        "height": 1625,
        "page": 1,
        "width": 1125
      },
      {
        "height": 1625,
        "page": 2,
        "width": 1125

            `}
            </code>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div
              className={classNames(styles.subTitle, "flex items-center gap-2")}
            >
              <SubTitleIcon />
              <span>Workflow Configuration</span>
            </div>
            <div
              className={classNames(
                styles.box,
                "flex-1 flex flex-col gap-3 w-full"
              )}
            >
              <div className="flex items-center gap-2">
                <code className={classNames(styles.codeChip, "w-fit")}>
                  Authorization
                </code>
                <span className="px-3 py-1 bg-[#C6F9EC] rounded-[40px] text-[#059B72] text-sm font-semibold">
                  Approved
                </span>
              </div>
              <span>
                In: <code className={styles.codeChip}>header</code>
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div
              className={classNames(styles.subTitle, "flex items-center gap-4")}
            >
              <SubTitleIcon />
              <span>Request Body</span>
            </div>
            <code className={classNames(styles.codeChip, "w-fit")}>
              multipart/form-data
            </code>
            <div className={classNames(styles.box, "flex-1 flex-col gap-3")}>
              <div className="flex items-center gap-2">
                <code className={classNames(styles.codeChip, "w-fit")}>
                  Document
                </code>
                <span className="px-3 py-1 bg-[#E4E3FF] rounded-[40px] text-[#586AF5] text-sm font-semibold">
                  Required
                </span>
              </div>
              <span>The document file to be processed.</span>
            </div>
          </div>
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
