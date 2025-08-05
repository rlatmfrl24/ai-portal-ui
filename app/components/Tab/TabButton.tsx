import React, { forwardRef } from "react";

interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  id: string;
  onClick?: () => void;
  variant?: "button" | "line";
}

const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ children, active = false, onClick, variant = "button", ...rest }, ref) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    const getClassName = () => {
      if (variant === "line") {
        return `relative flex-1 px-6 pt-4 pb-3 transition-all duration-300 cursor-pointer border-b-2 font-semibold whitespace-nowrap ${
          active
            ? "text-black border-black"
            : "text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300"
        }`;
      }

      // button variant (기본)
      return `relative flex-1 px-3 py-2 rounded-xl transition-colors duration-300 cursor-pointer z-10 ${
        active ? "text-white hover:" : "text-gray-500 hover:text-gray-700"
      }`;
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={getClassName()}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

TabButton.displayName = "TabButton";

export default TabButton;
