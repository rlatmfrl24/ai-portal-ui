import DropdownArrowIcon from "@/public/icon_dropdown_arrow.svg?url";
import Image from "next/image";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string | number; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  options,
  value,
  onChange,
  ...props
}: SelectProps) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={onChange}
        className="cursor-pointer appearance-none z-10 shadow-2 bg-white text-sm font-medium outline-none rounded py-1 pl-2 pr-6 h-8"
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="flex items-center justify-between"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
        <Image
          src={DropdownArrowIcon}
          alt="dropdown arrow"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
