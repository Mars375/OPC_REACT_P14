import { inputStyles } from "@/styles/inputStyles";

/**
 * Interface for defining validation rules for form fields.
 *
 * This interface allows specifying required validation and custom regex patterns with associated messages.
 */
export interface Rule {
	/**
	 * Error message to display when the field is required but not filled.
	 */
	required?: string;

	/**
	 * Custom validation pattern with a regex and a corresponding error message.
	 */
	pattern?: {
		value: RegExp;
		message: string;
	};
}

/**
 * Interface for properties of form fields used throughout the application.
 *
 * This interface defines the structure and expected types for properties passed to form field components.
 */
export interface FormFieldProps {
	/**
	 * Label text for the form field.
	 */
	label: string;

	/**
	 * Unique identifier for the form field.
	 */
	id: string;

	/**
	 * Type of the form field (e.g., text, email, password).
	 */
	type?: "text" | "number" | "email" | "password" | "date";

	/**
	 * Error message to display when the field validation fails.
	 */
	error?: string;

	/**
	 * Options for select type fields, each with a value and label.
	 */
	options?: { value: string; label: string }[];

	/**
	 * Additional CSS classes to style the form field.
	 */
	className?: string;

	/**
	 * Current value of the form field.
	 */
	value?: string;

	/**
	 * Name attribute of the form field.
	 */
	name?: string;

	/**
	 * Validation rules for the form field.
	 */
	rules?: Rule;

	/**
	 * Function to call on form field value change.
	 */
	onChange?: (value: string) => void;

	/**
	 * Placeholder text for the form field.
	 */
	placeholder?: string;

	/**
	 * Color theme for the form field, derived from input styles.
	 */
	color?: keyof typeof inputStyles.color;

	/**
	 * Size of the form field, derived from input styles.
	 */
	size?: keyof typeof inputStyles.size;
}
