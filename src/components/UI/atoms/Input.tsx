import React from "react";
import { InputProps } from "@/types/inputTypes";
import { inputStyles } from "@/styles/inputStyles";

/**
 * Custom input component that can be styled with TailwindCSS.
 * It supports different colors and sizes, and can be used in various forms throughout the application.
 *
 * @param {InputProps} props - Props for Input component
 * @returns {React.ReactElement} A styled input element.
 */
const Input: React.FC<InputProps> = ({
	color = "primary",
	size = "medium",
	className,
	...rest
}) => {
	const colorClass = inputStyles.color(color);
	const sizeClass = inputStyles.size[size];

	return (
		<input
			{...rest}
			className={`${inputStyles.base} ${colorClass} ${sizeClass} ${className}`}
		/>
	);
};

export default Input;
