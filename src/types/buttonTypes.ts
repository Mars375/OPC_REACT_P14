export interface ButtonProps {
	type?: "button" | "submit" | "reset";
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	disabled?: boolean;
	variant?: "text" | "outlined" | "contained";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}
