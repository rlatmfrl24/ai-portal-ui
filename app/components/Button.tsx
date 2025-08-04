interface ButtonProps {
  children: React.ReactNode;
  variant?: "outlined" | "contained" | "ghost";
  className?: string;
}

const variantStyles = {
  outlined: "border hover:bg-gray-100 active:bg-gray-200",
  contained: "bg-black text-white hover:bg-gray-800 active:bg-gray-900",
  ghost: "hover:bg-gray-100 active:bg-gray-200",
} as const;

export default function Button({
  variant = "outlined",
  children,
  className = "",
}: ButtonProps) {
  const baseClasses = "px-3 py-0.5 rounded-lg cursor-pointer";
  const variantClasses = variantStyles[variant];

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}
