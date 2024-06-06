import React, { InputHTMLAttributes } from "react";
import { baseClasses, colorClasses, sizeClasses } from "@styles/inputStyles";

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	size?: "small" | "medium" | "large";
	className?: string;
}

const Input: React.FC<InputProps> = ({
	color = "primary",
	size = "medium",
	className,
	...rest
}) => {
	const colorClass = colorClasses[color];
	const sizeClass = sizeClasses[size];

	return (
		<input
			{...rest}
			className={`${baseClasses} ${colorClass} ${sizeClass} w-full border rounded-md dark:bg-background dark:text-text ${className}`}
		/>
	);
};

export default Input;
