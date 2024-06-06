import React, { ButtonHTMLAttributes } from "react";
import {
	baseClasses,
	colorClasses,
	variantClasses,
	sizeClasses,
} from "@styles/buttonStyles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	variant?: "text" | "outlined" | "contained";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	color = "primary",
	variant = "contained",
	size = "medium",
	children,
	className,
	...rest
}) => {
	const colorClass = colorClasses[color];
	const variantClass = variantClasses[variant];
	const sizeClass = sizeClasses[size];

	return (
		<button
			{...rest}
			className={`${baseClasses} ${colorClass} ${variantClass} ${sizeClass} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
