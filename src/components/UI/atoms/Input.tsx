import React from "react";
import { InputProps } from "@/types/inputTypes";
import { inputStyles } from "@/styles/inputStyles";

const Input: React.FC<InputProps> = React.memo(
	({
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
			<input
				{...rest}
				className={`${inputStyles.base} ${colorClass} ${sizeClass} ${transitionClass}${errorClass} ${className}`}
				placeholder={placeholder}
				aria-invalid={!!fieldError}
				aria-describedby={fieldError ? `${id}-error` : undefined}
			/>
		);
	}
);

export default Input;
