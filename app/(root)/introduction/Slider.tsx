"use client";

import Slider from "react-slick";
import LeftArrow from "@/public/icon_arrow_left.svg?url";
import RightArrow from "@/public/icon_arrow_right.svg?url";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./introduction.module.css";

interface SliderSettings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  prevArrow?: React.ReactElement;
  nextArrow?: React.ReactElement;
  responsive?: Array<{
    breakpoint: number;
    settings: Partial<SliderSettings>;
  }>;
  customPaging?: (i: number) => React.ReactElement;
  dotsClass?: string;
}

interface SliderProps {
  children: React.ReactNode;
  settings?: Partial<SliderSettings>;
}

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: "prev" | "next";
}

const CustomArrow = ({ onClick, direction }: CustomArrowProps) => {
  const isPrev = direction === "prev";
  const arrowSrc = isPrev ? LeftArrow : RightArrow;
  const arrowAlt = isPrev ? "previous-arrow" : "next-arrow";

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-10 rounded-full h-14 w-14 flex items-center justify-center cursor-pointer bg-black/10 ${
        isPrev ? "-left-24" : "-right-24"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={arrowSrc}
          alt={arrowAlt}
          width={32}
          height={32}
          className={`block max-w-full h-auto ${
            isPrev ? "-translate-x-0.5" : "translate-x-0.5"
          }`}
        />
      </div>
    </div>
  );
};

export default function CustomSlider({ children, settings }: SliderProps) {
  const defaultSettings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    dotsClass: "slick-dots slick-thumb",
    customPaging: () => <div className="dot" />,
    ...settings,
  };

  return (
    <div className="slider-container relative min-h-[200px]">
      <Slider {...defaultSettings}>{children}</Slider>
    </div>
  );
}
