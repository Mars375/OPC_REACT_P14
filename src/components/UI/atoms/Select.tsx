import React, { SelectHTMLAttributes } from "react";
import { inputStyles } from "@/styles/inputStyles";
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
	placeholder,
	fieldError,
	id,
	...rest
}) => {
	const colorClass = fieldError
		? inputStyles.color.error
		: inputStyles.color[color];
	const sizeClass = inputStyles.size[size];
	const transitionClass = "transition ease-in-out duration-300";

	return (
		<select
			{...rest}
			className={`${inputStyles.base} ${colorClass} ${sizeClass} ${transitionClass} `}
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
