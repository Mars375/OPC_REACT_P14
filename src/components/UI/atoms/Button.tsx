import React from "react";
import { ButtonProps } from "@/types/buttonTypes";
import { buttonStyles } from "@/styles/buttonStyles";

const Button: React.FC<ButtonProps> = React.memo(
	({
		type = "button",
		color = "primary",
		variant = "contained",
		size = "medium",
		disabled = false,
		children,
		className,
		onClick,
		...rest
	}) => {
		const colorClass = buttonStyles.color[color];
		const variantClass = buttonStyles.variant[variant];
		const sizeClass = buttonStyles.size[size];
		const transitionClass = "transition ease-in-out duration-300";

		return (
			<button
				type={type}
				className={`${buttonStyles.base} ${colorClass} ${variantClass} ${sizeClass} ${transitionClass} ${className}`}
				disabled={disabled}
				onClick={onClick}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

export default Button;
