import React, { SelectHTMLAttributes } from "react";
import { inputStyles } from "@/styles/inputStyles";
import { useTheme } from "@/hooks/useTheme";

interface SelectProps
	extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	options: { value: string; label: string }[];
	color?: keyof typeof inputStyles.color;
	size?: keyof typeof inputStyles.size;
	className?: string;
	placeholder?: string;
	fieldError?: string;
	id?: string;
}

const Select: React.FC<SelectProps> = ({
	options,
	color = "primary",
	size = "medium",
	fieldError,
	id,
	...rest
}) => {
	const { theme } = useTheme();
	const colorClass = inputStyles.color[color];
	const sizeClass = inputStyles.size[size] || inputStyles.size.medium;
	const baseClass = inputStyles.base;

	return (
		<select
			{...rest}
			className={`${baseClass} ${colorClass} ${sizeClass} ${
				theme === "dark" ? "dark-scrollbar" : "light-scrollbar"
			}`}
			aria-invalid={!!fieldError}
			aria-describedby={fieldError ? `${id}-error` : undefined}
		>
			<option value='' disabled hidden></option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
