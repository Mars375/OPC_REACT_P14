import { inputStyles } from "@/styles/inputStyles";
import { InputHTMLAttributes } from "react";

/**
 * Interface for input properties used throughout the application.
 *
 * This interface extends the standard HTML input attributes while adding additional properties
 * specific to the application's styling and functionality needs.
 */
export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	/**
	 * Optional array of options for select inputs, each with a value and label.
	 */
	options?: { value: string; label: string }[];

	/**
	 * Specifies the color theme for the input, derived from predefined input styles.
	 */
	color?: keyof typeof inputStyles.color;

	/**
	 * Specifies the size of the input, derived from predefined input styles.
	 */
	size?: keyof typeof inputStyles.size;

	/**
	 * Additional CSS classes to apply to the input.
	 */
	className?: string;

	/**
	 * Placeholder text for the input.
	 */
	placeholder?: string;

	/**
	 * Error message to display when the input field validation fails.
	 */
	fieldError?: string;

	/**
	 * Unique identifier for the input.
	 */
	id?: string;
}
