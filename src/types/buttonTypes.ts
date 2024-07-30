/**
 * Interface for button properties used throughout the application.
 *
 * This interface defines the types and options for properties that can be passed to button components.
 */
export interface ButtonProps {
	/**
	 * Specifies the button type.
	 * @type {"button" | "submit" | "reset"}
	 */
	type?: "button" | "submit" | "reset";

	/**
	 * Specifies the button color theme.
	 * @type {"primary" | "secondary" | "error" | "warning" | "info" | "success"}
	 */
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";

	/**
	 * If true, the button will be disabled.
	 * @type {boolean}
	 */
	disabled?: boolean;

	/**
	 * Specifies the button style variant.
	 * @type {"text" | "outlined" | "contained"}
	 */
	variant?: "text" | "outlined" | "contained";

	/**
	 * Specifies the size of the button.
	 * @type {"small" | "medium" | "large"}
	 */
	size?: "small" | "medium" | "large";

	/**
	 * The content to be displayed inside the button.
	 * @type {React.ReactNode}
	 */
	children: React.ReactNode;

	/**
	 * Additional CSS classes to apply to the button.
	 * @type {string}
	 */
	className?: string;

	/**
	 * Function to call on button click.
	 * @type {() => void}
	 */
	onClick?: () => void;
}
