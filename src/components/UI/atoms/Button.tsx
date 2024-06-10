import React from "react";
import { ButtonProps } from "@/types/buttonTypes";
import { buttonStyles } from "@/styles/buttonStyles";

/**
 * Represents a Button component that can be customized with several visual variants.
 * It supports different sizes, colors, and can be used in various contexts such as forms or as standalone action buttons.
 *
 * @component
 * @param {Object} props - Props for Button component
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - Specifies the HTML button type.
 * @param {'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'} [props.color='primary'] - Theme color variant.
 * @param {'text' | 'outlined' | 'contained'} [props.variant='contained'] - Visual style variant.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Size of the button.
 * @param {React.ReactNode} props.children - Content to be rendered inside the button.
 * @param {string} [props.className] - Additional CSS classes for further customization.
 * @returns {React.ReactElement} A styled button element.
 */
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
