import React, { forwardRef } from "react";

interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  id: string;
  onClick?: () => void;
}

const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ children, active = false, onClick, ...rest }, ref) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={`relative flex-1 px-3 py-2 rounded-xl transition-colors duration-300 cursor-pointer z-10 ${
          active ? "text-white" : "text-gray-500 hover:text-gray-700"
        }`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

TabButton.displayName = "TabButton";

export default TabButton;
