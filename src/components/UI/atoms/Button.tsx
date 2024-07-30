import React from "react";
import { ButtonProps } from "@/types/buttonTypes";
import { buttonStyles } from "@/styles/buttonStyles";

/**
 * Button component that can be reused throughout the application.
 *
 * This component is designed to be flexible and customizable, allowing for different colors, sizes, and variants.
 * It uses predefined styles from `buttonStyles` for consistent styling across the application.
 *
 * @param {ButtonProps} props - The properties passed to the button component.
 */
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
		// Determine the classes for color, variant, and size based on props
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
