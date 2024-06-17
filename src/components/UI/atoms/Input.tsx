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
		const colorClass = inputStyles.color[color] || inputStyles.color.primary;
		const sizeClass = inputStyles.size[size] || inputStyles.size.medium;
		const errorClass = fieldError ? inputStyles.color.error : "";
		const baseClass = inputStyles.base;
		const transitionClass = "transition ease-in-out duration-300";

		return (
			<input
				{...rest}
				className={`${baseClass} ${colorClass} ${sizeClass} ${errorClass} ${transitionClass} `}
				placeholder={placeholder}
				aria-invalid={!!fieldError}
			/>
		);
	}
);

export default Input;
