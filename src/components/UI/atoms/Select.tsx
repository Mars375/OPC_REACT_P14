import React, { SelectHTMLAttributes } from "react";
import { inputStyles } from "@/styles/inputStyles";

interface SelectProps
	extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	options: { value: string; label: string }[];
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	size?: "small" | "medium" | "large";
	className?: string;
	placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
	options,
	color = "primary",
	size = "medium",
	className,
	placeholder,
	...rest
}) => {
	const colorClass = inputStyles.color(color);
	const sizeClass = inputStyles.size[size];
	const transitionClass = "transition ease-in-out duration-300";

	return (
		<select
			{...rest}
			className={`${inputStyles.base} ${colorClass} ${sizeClass} ${transitionClass} ${className}`}
		>
			{placeholder && (
				<option value='' disabled>
					{placeholder}
				</option>
			)}
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
