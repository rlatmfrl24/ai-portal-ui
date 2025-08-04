"use client";

import React, { useState, useRef, useEffect } from "react";

interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  id: string;
  onClick?: () => void;
}

export default function TabGroup({
  children,
  activeId,
  onChange,
}: {
  children: React.ReactNode;
  activeId: string;
  onChange?: (activeId: string) => void;
}) {
  const [activeTab, setActiveTab] = useState(activeId);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // onChange 콜백이 있으면 호출
    if (onChange) {
      onChange(tabId);
    }
  };

  // 슬라이더 위치 업데이트
  useEffect(() => {
    const activeButton = buttonRefs.current[activeTab];
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;

      setSliderStyle({ left, width });
    }
  }, [activeTab]);

  // 초기 슬라이더 위치 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      const activeButton = buttonRefs.current[activeTab];
      const container = containerRef.current;

      if (activeButton && container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();

        const left = buttonRect.left - containerRect.left;
        const width = buttonRect.width;

        setSliderStyle({ left, width });
        setIsInitialized(true); // 초기화 완료 표시
      }
    }, 0);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex gap-2 p-1 rounded-xl border border-[#C9D3DE]"
    >
      {/* 슬라이더 배경 */}
      <div
        className={`absolute top-1 bottom-1 bg-black rounded-xl ${
          isInitialized ? "transition-all duration-300 ease-out" : ""
        }`}
        style={{
          left: `${sliderStyle.left}px`,
          width: `${sliderStyle.width}px`,
        }}
      />

      {React.Children.map(children, (child) => {
        if (React.isValidElement<TabButtonProps>(child) && child.props.id) {
          const isActive = child.props.id === activeTab;
          const props = {
            active: isActive,
            onClick: () => handleTabClick(child.props.id),
            ref: (el: HTMLButtonElement | null) => {
              buttonRefs.current[child.props.id] = el;
            },
          };
          return React.cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
}
