/**
 * Interface for department options used in select dropdowns throughout the application.
 *
 * This interface defines the structure for department options, ensuring consistency across components.
 */
export interface DepartmentOption {
	/**
	 * The value of the department option, typically used as a unique identifier.
	 */
	value: string;

	/**
	 * The label of the department option, displayed in the UI.
	 */
	label: string;
}

/**
 * Type definition for an array of DepartmentOption.
 *
 * This type is used to handle lists of department options in various components.
 */
export type DepartmentOptions = DepartmentOption[];
