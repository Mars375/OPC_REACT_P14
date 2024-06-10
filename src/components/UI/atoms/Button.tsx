import React from "react";

interface ButtonProps {
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	variant?: "text" | "outlined" | "contained";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
	className?: string;
}

const buttonStyles = {
	base: "px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50",
	color: {
		primary: "bg-blue-500 text-white",
		secondary: "bg-gray-500 text-white",
		error: "bg-red-500 text-white",
		warning: "bg-yellow-500 text-black",
		info: "bg-blue-300 text-white",
		success: "bg-green-500 text-white",
	},
	variant: {
		text: "bg-transparent",
		outlined: "border-2",
		contained: "shadow-md",
	},
	size: {
		small: "text-sm",
		medium: "text-base",
		large: "text-lg",
	},
};

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
