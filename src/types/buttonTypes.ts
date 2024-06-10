export interface ButtonProps {
	type?: "button" | "submit" | "reset"; // Ajout du type de bouton
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	variant?: "text" | "outlined" | "contained";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
	className?: string;
}
