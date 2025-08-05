"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Select from "@/app/components/Select";
import LeftArrowIcon from "@/public/icon_arrow_left.svg";
import RightArrowIcon from "@/public/icon_arrow_right.svg";

// PDF.js 컴포넌트를 동적으로 로드 (SSR 비활성화)
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});

// PDF.js worker 설정 (원격 CDN 사용)
const initializePdfJs = () => {
  if (typeof window !== "undefined") {
    import("react-pdf").then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
    });
  }
};

interface PdfViewerProps {
  url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 줌 옵션들
  const zoomOptions = [
    { value: 0.5, label: "50%" },
    { value: 0.75, label: "75%" },
    { value: 1.0, label: "100%" },
    { value: 1.25, label: "125%" },
    { value: 1.5, label: "150%" },
    { value: 2.0, label: "200%" },
    { value: 3.0, label: "300%" },
  ];

  // PDF.js 초기화
  useEffect(() => {
    initializePdfJs();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const handleZoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setScale(parseFloat(event.target.value));
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* PDF 뷰어 */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 right-0 bottom-0 overflow-auto p-4"
      >
        <div className="w-max min-w-full flex justify-center pb-20">
          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className="p-5 text-center">PDF를 로딩 중...</div>}
            error={
              <div className="p-5 text-center text-red-600">
                PDF를 불러올 수 없습니다.
              </div>
            }
          >
            <Page
              className="shadow-2 rounded-lg overflow-hidden"
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              loading={
                <div className="p-5 text-center">페이지를 로딩 중...</div>
              }
            />
          </Document>
        </div>
      </div>

      {/* 페이지 네비게이션 - 중앙 하단 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="cursor-pointer w-8 h-8 bg-white outline-none rounded flex items-center justify-center shadow-1"
        >
          <LeftArrowIcon className="w-4 h-4" />
        </button>
        <span style={{ fontSize: "14px", fontWeight: "500" }}>
          {pageNumber} / {numPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="cursor-pointer w-8 h-8 bg-white outline-none rounded flex items-center justify-center shadow-1"
        >
          <RightArrowIcon className="w-4 h-4" />
        </button>
      </div>

      {/* 줌 컨트롤 - 우측 하단 */}
      <div className="absolute bottom-4 right-4 z-10">
        <Select
          options={zoomOptions}
          value={scale.toString()}
          onChange={handleZoomChange}
        />
      </div>
    </div>
  );
}
