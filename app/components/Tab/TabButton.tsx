import React from "react";

export default function TabButton({
  children,
  active = false,
  id, // eslint-disable-line @typescript-eslint/no-unused-vars
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  id: string;
  onClick?: () => void;
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex-1 px-3 py-2 rounded-xl transition-colors duration-200 cursor-pointer ${
        active
          ? "bg-black text-white"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}
