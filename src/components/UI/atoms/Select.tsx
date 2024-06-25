import React, { SelectHTMLAttributes } from "react";
import { inputStyles } from "@/styles/inputStyles";
import { useTheme } from "@/hooks/useTheme";

interface SelectProps<T>
	extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	options: T[];
	renderOption: (option: T) => React.ReactNode;
	getOptionValue: (option: T) => string;
	color?: keyof typeof inputStyles.color;
	size?: keyof typeof inputStyles.size;
	className?: string;
	placeholder?: string;
	fieldError?: string;
	id?: string;
}

const Select = <T,>({
	options,
	renderOption,
	getOptionValue,
	color = "primary",
	size = "medium",
	fieldError,
	id,
	...rest
}: SelectProps<T>) => {
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
				<option key={getOptionValue(option)} value={getOptionValue(option)}>
					{renderOption(option)}
				</option>
			))}
		</select>
	);
};

export default Select;
