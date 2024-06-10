import React from "react";
import { ButtonProps } from "@/types/buttonTypes";
import { buttonStyles } from "@/styles/buttonStyles";

const Button: React.FC<ButtonProps> = React.memo(
	({
		color = "primary",
		variant = "contained",
		size = "medium",
		children,
		className,
		...rest
	}) => {
		const colorClass = buttonStyles.color[color];
		const variantClass = buttonStyles.variant[variant];
		const sizeClass = buttonStyles.size[size];

		return (
			<button
				{...rest}
				className={`${buttonStyles.base} ${colorClass} ${variantClass} ${sizeClass} ${className}`}
			>
				{children}
			</button>
		);
	}
);

export default Button;
