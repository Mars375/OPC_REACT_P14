import React, { SelectHTMLAttributes } from "react";

interface SelectProps
	extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	options: { value: string; label: string }[];
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	size?: "small" | "medium" | "large";
	className?: string;
}

const Select: React.FC<SelectProps> = ({
	options,
	color = "primary",
	size = "medium",
	className,
	...rest
}) => {
	const colorClass = `bg-${color}-500 text-white`;
	const sizeClass =
		size === "large" ? "p-4" : size === "medium" ? "p-3" : "p-2";
	const transitionClass = "transition ease-in-out duration-300";

	return (
		<select
			{...rest}
			className={`${colorClass} ${sizeClass} ${transitionClass} w-full rounded-md ${className} focus:ring-2 focus:ring-${color}-300`}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
