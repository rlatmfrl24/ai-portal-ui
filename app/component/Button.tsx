export default function Button({
  variant = "outlined",
  children,
  className,
}: {
  children: React.ReactNode;
  variant?: "outlined" | "contained" | "ghost";
  className?: string;
}) {
  return (
    <button
      className={`px-3 py-0.5 rounded-lg cursor-pointer ${
        variant === "outlined"
          ? "border hover:bg-gray-100 active:bg-gray-200"
          : variant === "contained"
          ? "bg-black text-white hover:bg-gray-800 active:bg-gray-900"
          : "hover:bg-gray-100 active:bg-gray-200"
      } ${className || ""}`}
    >
      {children}
    </button>
  );
}
