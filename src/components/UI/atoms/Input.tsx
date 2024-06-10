import React from "react";
import { InputProps } from "@/types/inputTypes";
import { inputStyles } from "@/styles/inputStyles";

/**
 * Custom input component that can be styled with TailwindCSS.
 * It supports different colors and sizes, and can be used in various forms throughout the application.
 *
 * @param {InputProps} props - Props for Input component
 * @param {string} [props.color='primary'] - The color theme of the input, default is 'primary'.
 * @param {string} [props.size='medium'] - The size of the input, default is 'medium'.
 * @param {string} [props.className] - Additional custom classes for more specific styling.
 * @returns {React.ReactElement} A styled input element.
 */

const Input: React.FC<InputProps> = React.memo(
	({ color = "primary", size = "medium", className, ...rest }) => {
		const colorClass = inputStyles.color(color);
		const sizeClass = inputStyles.size[size];

		return (
			<input
				{...rest}
				className={`${inputStyles.base} ${colorClass} ${sizeClass} ${className}`}
			/>
		);
	}
);

export default Input;
