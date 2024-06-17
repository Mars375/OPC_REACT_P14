import React from "react";
import { InputProps } from "@/types/inputTypes";
import { inputStyles } from "@/styles/inputStyles";

const Input: React.FC<InputProps> = React.memo(
	({ color = "primary", size = "medium", className, placeholder, ...rest }) => {
		const colorClass = inputStyles.color(color);
		const sizeClass = inputStyles.size[size];
		const transitionClass = "transition ease-in-out duration-300";

		return (
			<input
				{...rest}
				className={`${inputStyles.base} ${colorClass} ${sizeClass} ${transitionClass} ${className}`}
				placeholder={placeholder}
			/>
		);
	}
);

export default Input;
