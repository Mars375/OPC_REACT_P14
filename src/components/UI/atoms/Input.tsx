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
				className={`${baseClass} ${colorClass} ${sizeClass} dark:[color-scheme:dark]`}
				placeholder={placeholder}
				aria-invalid={!!fieldError}
				required
			/>
		);
	}
);

export default Input;
