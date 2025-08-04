interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outlined" | "contained" | "ghost";
  className?: string;
  backgroundColor?: string;
}

const variantStyles = {
  outlined: "border hover:bg-gray-100 active:bg-gray-200",
  contained: "text-white",
  ghost: "hover:bg-gray-100 active:bg-gray-200",
} as const;

export default function Button({
  variant = "outlined",
  children,
  className = "",
  backgroundColor,
  ...props
}: ButtonProps) {
  const baseClasses = "px-3 py-0.5 rounded-lg cursor-pointer";
  const variantClasses = variantStyles[variant];

  // contained variant의 기본 배경색 클래스 (사용자 정의 색상이 없을 때만)
  const defaultContainedBg =
    variant === "contained" && !backgroundColor
      ? "bg-black hover:bg-gray-800 active:bg-gray-900"
      : "";

  // 사용자 정의 배경색을 위한 인라인 스타일
  const customStyle =
    variant === "contained" && backgroundColor ? { backgroundColor } : {};

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${defaultContainedBg} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
}
