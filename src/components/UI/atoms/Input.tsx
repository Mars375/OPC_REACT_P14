import React from "react";
import { InputProps } from "@/types/inputTypes";
import { inputStyles } from "@/styles/inputStyles";

/**
 * Input component that can be reused throughout the application.
 *
 * This component is designed to be flexible and customizable, allowing for different colors and sizes.
 * It uses predefined styles from `inputStyles` for consistent styling across the application.
 *
 * @param {InputProps} props - The properties passed to the input component.
 */
const Input: React.FC<InputProps> = React.memo(
	({
		color = "primary",
		size = "medium",
		placeholder,
		fieldError,
		...rest
	}) => {
		// Determine the classes for color and size based on props
		const colorClass = inputStyles.color[color];
		const sizeClass = inputStyles.size[size] || inputStyles.size.medium;
		const baseClass = inputStyles.base;

		return (
			<input
				{...rest}
				className={`${baseClass} ${colorClass} ${sizeClass} dark:[color-scheme:dark]`}
				placeholder={placeholder}
				aria-invalid={!!fieldError}
				required
			/>
		);
	}
);

export default Input;
