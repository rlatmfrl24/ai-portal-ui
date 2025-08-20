export default function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-[#FF9573] to-[#505EE2] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
