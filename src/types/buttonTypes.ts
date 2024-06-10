/**
 * ButtonProps defines the structure for properties used in the Button component.
 * This interface is used to type-check the props passed to the Button, ensuring that all necessary fields are included and correctly typed.
 *
 * @property {("button" | "submit" | "reset")} [type] - The type of the button, which determines the button's behavior in forms.
 * @property {("primary" | "secondary" | "error" | "warning" | "info" | "success")} [color] - The theme color of the button.
 * @property {("text" | "outlined" | "contained")} [variant] - The visual style variant of the button.
 * @property {("small" | "medium" | "large")} [size] - The size of the button.
 * @property {React.ReactNode} children - The content inside the button, typically text or icons.
 * @property {string} [className] - Optional CSS class for styling the button.
 */
export interface ButtonProps {
	type?: "button" | "submit" | "reset"; // Ajout du type de bouton
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	variant?: "text" | "outlined" | "contained";
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
	className?: string;
}
