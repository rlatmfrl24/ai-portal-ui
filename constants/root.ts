export const OCR_ITEMS = [
  {
    id: "shipping-instruction",
    title: "Shipping Instruction",
    description: "Extracts data from Ocean Carrier SI documents.",
  },
  {
    id: "invoice",
    title: "Invoice",
    description: "Extracts data from Terminal Invoice documents.",
  },
  {
    id: "msds",
    title: "MSDS",
    description: "Extracts data from Material Safety Data Sheet documents.",
  },
  {
    id: "mnr",
    title: "M&R",
    description: "Extracts data from Manifest & Receipt documents.",
  },
] as const;

// 슬라이더 데이터
export const SLIDER_DATA = [
  {
    id: "slider-1",
    title: "Intelligent Logistics",
    subtitle: "Document Data Extraction",
    bgColor: "#4e4d80",
    imageClassName: "self-end",
  },
  {
    id: "slider-2",
    title: "Presize M&R Service",
    subtitle: "with AI-based OCR",
    bgColor: "#E86940",
    imageClassName: "self-end translate-x-10",
  },
  {
    id: "slider-3",
    title: "Carousel Test",
    subtitle: "Green Slide Example",
    bgColor: "rgb(22, 163, 74)", // green-600
    imageClassName: "",
  },
] as const;
