import React from "react";
import { InputProps } from "@/types/inputTypes";
import { inputStyles } from "@/styles/inputStyles";

const Input: React.FC<InputProps> = React.memo(
	({
		color = "primary",
		size = "medium",
		placeholder,
		fieldError,
		...rest
	}) => {
		const colorClass = inputStyles.color[color];
		const sizeClass = inputStyles.size[size] || inputStyles.size.medium;
		const baseClass = inputStyles.base;

		return (
			<input
				{...rest}
				className={`${baseClass} ${colorClass} ${sizeClass}`}
				placeholder={placeholder}
				aria-invalid={!!fieldError}
			/>
		);
	}
);

export default Input;
