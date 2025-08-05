"use client";

export default function IconButton({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
