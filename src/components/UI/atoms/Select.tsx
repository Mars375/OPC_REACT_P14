import React, { SelectHTMLAttributes } from "react";
import { baseClasses, colorClasses, sizeClasses } from "@styles/inputStyles";

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
	id,
	...rest
}) => {
	const colorClass = colorClasses[color];
	const sizeClass = sizeClasses[size];

	return (
		<select
			id={id}
			{...rest}
			className={`${baseClasses} ${colorClass} ${sizeClass} w-full border rounded-md dark:bg-background dark:text-text ${className}`}
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
