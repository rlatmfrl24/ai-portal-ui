"use client";

import Slider, { Settings } from "react-slick";
import LeftArrow from "@/public/icon_arrow_left.svg";
import RightArrow from "@/public/icon_arrow_right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./introduction/introduction.module.css";

interface SliderProps {
  children: React.ReactNode;
  settings?: Partial<Settings>;
}

interface CustomArrowProps {
  onClick?: () => void;
  direction: "prev" | "next";
}

const CustomArrow = ({ onClick, direction }: CustomArrowProps) => {
  const isPrev = direction === "prev";
  const arrowSrc = isPrev ? (
    <LeftArrow className="-translate-x-0.5 h-8 w-8" />
  ) : (
    <RightArrow className="translate-x-0.5 h-8 w-8" />
  );
  const positionClass = isPrev ? "-left-24" : "-right-24";

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-10 rounded-full h-14 w-14 flex items-center justify-center cursor-pointer bg-black/10 ${positionClass}`}
      onClick={onClick}
    >
      {arrowSrc}
    </div>
  );
};

export default function CustomSlider({ children, settings }: SliderProps) {
  const defaultSettings: Settings = {
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
