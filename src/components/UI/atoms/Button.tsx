import React from "react";
import { ButtonProps } from "@/types/buttonTypes";
import { buttonStyles } from "@/styles/buttonStyles";

const Button: React.FC<ButtonProps> = React.memo(
	({
		type = "button",
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
				type={type}
				className={`${buttonStyles.base} ${colorClass} ${variantClass} ${sizeClass} ${className}`}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

export default Button;
