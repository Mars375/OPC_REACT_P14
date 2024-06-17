import React, { SelectHTMLAttributes } from "react";
import { inputStyles } from "@/styles/inputStyles";

interface SelectProps
	extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	options: { value: string; label: string }[];
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	size?: "small" | "medium" | "large";
	className?: string;
	placeholder?: string;
	fieldError?: string;
	id?: string;
}

const Select: React.FC<SelectProps> = ({
	options,
	color = "primary",
	size = "medium",
	className,
	placeholder,
	fieldError,
	id,
	...rest
}) => {
	const colorClass = inputStyles.color(color);
	const sizeClass = inputStyles.size[size];
	const transitionClass = "transition ease-in-out duration-300";
	const errorClass = fieldError ? "ring-2 ring-red-500" : "";

	return (
		<select
			{...rest}
			className={`${inputStyles.base} ${colorClass} ${sizeClass} ${transitionClass} ${errorClass} ${className} focus:ring-2 focus:ring-${color}-300`}
			aria-invalid={!!fieldError}
			aria-describedby={fieldError ? `${id}-error` : undefined}
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
