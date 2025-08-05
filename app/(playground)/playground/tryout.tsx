"use client";

import Button from "@/app/components/Button";
import UploadIcon from "@/public/icon_upload.svg";
import CheckIcon from "@/public/icon_check.svg";
import { useState, useEffect } from "react";
import TabGroup from "@/app/components/Tab/TabGroup";
import TabButton from "@/app/components/Tab/TabButton";
import PdfViewer from "./PdfViewer";

interface PdfItem {
  id: string;
  name: string;
  pdfUrl: string;
  htmlUrl: string;
}

export default function TryOut() {
  const initialPdfItems: PdfItem[] = [
    {
      id: "sample1",
      name: "Sample 1",
      pdfUrl: "/example_1.pdf",
      htmlUrl: "/example_1.html",
    },
    {
      id: "sample2",
      name: "Sample 2",
      pdfUrl: "/example_2.pdf",
      htmlUrl: "/example_2.html",
    },
    {
      id: "sample3",
      name: "Sample 3",
      pdfUrl: "/example_3.pdf",
      htmlUrl: "/example_3.html",
    },
  ];

  const [pdfItems, setPdfItems] = useState<PdfItem[]>(initialPdfItems);
  const [selectedItem, setSelectedItem] = useState<string | null>(
    initialPdfItems[0].id
  );
  const [activeTab, setActiveTab] = useState<string>("parsing-result");
  const [htmlContent, setHtmlContent] = useState<string>("");

  // HTML 파일을 가져오는 함수
  const fetchHtmlContent = async (htmlUrl: string) => {
    if (!htmlUrl) {
      setHtmlContent("");
      return;
    }

    try {
      const response = await fetch(htmlUrl);
      if (response.ok) {
        const html = await response.text();
        setHtmlContent(html);
      } else {
        setHtmlContent("<p>HTML 파일을 불러올 수 없습니다.</p>");
      }
    } catch (error) {
      console.error("HTML 파일 로딩 오류:", error);
      setHtmlContent("<p>HTML 파일 로딩 중 오류가 발생했습니다.</p>");
    }
  };

  // 선택된 아이템이 변경될 때 HTML 내용을 가져옴
  useEffect(() => {
    const selectedPdfItem = pdfItems.find((item) => item.id === selectedItem);
    if (selectedPdfItem?.htmlUrl) {
      fetchHtmlContent(selectedPdfItem.htmlUrl);
    } else {
      setHtmlContent("");
    }
  }, [selectedItem, pdfItems]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      const fileUrl = URL.createObjectURL(file);
      const newPdfItem: PdfItem = {
        id: `upload-${Date.now()}`,
        name: file.name.replace(".pdf", ""),
        pdfUrl: fileUrl,
        htmlUrl: "", // 업로드된 파일은 HTML 버전이 없음
      };

      setPdfItems((prev) => [...prev, newPdfItem]);
      setSelectedItem(newPdfItem.id);
    } else {
      alert("PDF 파일만 업로드 가능합니다.");
    }

    // input을 리셋하여 같은 파일을 다시 선택할 수 있게 함
    event.target.value = "";
  };

  const triggerFileUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".pdf";
    input.onchange = (event) =>
      handleFileUpload(event as unknown as React.ChangeEvent<HTMLInputElement>);
    input.click();
  };

  return (
    <div className="flex h-full">
      <div className="w-1/2 border-r border-gray-200 flex flex-col px-6 py-4 gap-2">
        <div className="flex items-center">
          <button
            onClick={triggerFileUpload}
            className="flex items-center gap-2 text-black cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-1 whitespace-nowrap"
          >
            <UploadIcon />
            File Upload
          </button>
          <div aria-label="divider" className="w-px h-6 bg-gray-200 mx-4" />

          <div className="flex gap-2 flex-wrap">
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
        <div className="flex flex-1 bg-gray-100 rounded-lg">
          {selectedItem && (
            <PdfViewer
              url={
                pdfItems.find((item) => item.id === selectedItem)?.pdfUrl || ""
              }
            />
          )}
        </div>
      </div>
      <div className="w-1/2 flex flex-col h-full">
        <div className="w-fit ml-6 flex-shrink-0">
          <TabGroup
            activeId={activeTab}
            onChange={(tabId) => setActiveTab(tabId)}
            variant="line"
          >
            <TabButton id="parsing-result">Parsing Result</TabButton>
            <TabButton id="json-file">JSON File</TabButton>
          </TabGroup>
        </div>
        <div className="border-t border-gray-200 flex-auto h-0 overflow-auto">
          {activeTab === "parsing-result" ? (
            <div className="h-full overflow-hidden">
              {htmlContent ? (
                <div
                  className="html-content p-6"
                  style={{
                    height: "100%",
                    maxHeight: "100%",
                    overflow: "auto",
                    boxSizing: "border-box",
                  }}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              ) : (
                <div className="text-gray-500 text-center py-8 h-full flex items-center justify-center">
                  {selectedItem
                    ? "HTML 파일을 로딩 중입니다..."
                    : "파일을 선택해주세요."}
                </div>
              )}
            </div>
          ) : (
            <div className="h-full overflow-auto p-6">JSON File</div>
          )}
        </div>
      </div>
    </div>
  );
}
