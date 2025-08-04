"use client";

import React, { useState } from "react";

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

  const handleTabClick = (tabId: string) => {
    console.log("Tab clicked:", tabId); // 디버깅용
    setActiveTab(tabId);
    // onChange 콜백이 있으면 호출
    if (onChange) {
      onChange(tabId);
    }
  };

  return (
    <div className="flex gap-2 p-1 rounded-xl border border-[#C9D3DE]">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<TabButtonProps>(child) && child.props.id) {
          const isActive = child.props.id === activeTab;
          const props = {
            active: isActive,
            onClick: () => handleTabClick(child.props.id),
          };
          return React.cloneElement(child, props);
        }
        return child;
      })}
    </div>
  );
}
