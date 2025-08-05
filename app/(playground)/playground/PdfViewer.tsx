"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

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

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3.0));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const resetZoom = () => {
    setScale(1.0);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* 컨트롤 바 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px",
          borderBottom: "1px solid #e5e5e5",
          flexShrink: 0,
        }}
      >
        {/* 페이지 네비게이션 */}
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          style={{
            padding: "4px 8px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          이전
        </button>
        <span style={{ fontSize: "14px" }}>
          {pageNumber} / {numPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          style={{
            padding: "4px 8px",
            border: "1px solid #ccc",
            background: "white",
            cursor: "pointer",
          }}
        >
          다음
        </button>

        {/* 줌 컨트롤 */}
        <div
          style={{
            marginLeft: "16px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <button
            onClick={zoomOut}
            style={{
              padding: "4px 8px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
            }}
          >
            -
          </button>
          <span
            style={{ fontSize: "14px", minWidth: "50px", textAlign: "center" }}
          >
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            style={{
              padding: "4px 8px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
            }}
          >
            +
          </button>
          <button
            onClick={resetZoom}
            style={{
              padding: "4px 8px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
              marginLeft: "4px",
            }}
          >
            100%
          </button>
        </div>
      </div>

      {/* PDF 뷰어 */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden", // 상위 레이아웃 보호
          minHeight: 0, // flex shrink 허용
        }}
      >
        <div
          ref={containerRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "auto", // 스크롤 허용
            padding: "16px",
          }}
        >
          <div
            style={{
              width: "max-content", // 내용 크기에 맞춤 (확대 시 스크롤 가능)
              minWidth: "100%", // 축소 시 최소 너비 보장 (중앙 정렬)
              display: "flex",
              justifyContent: "center",
              paddingBottom: "20px", // 하단 여백
            }}
          >
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div style={{ padding: "20px", textAlign: "center" }}>
                  PDF를 로딩 중...
                </div>
              }
              error={
                <div
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    color: "#d32f2f",
                  }}
                >
                  PDF를 불러올 수 없습니다.
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div style={{ padding: "20px", textAlign: "center" }}>
                    페이지를 로딩 중...
                  </div>
                }
              />
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
}
