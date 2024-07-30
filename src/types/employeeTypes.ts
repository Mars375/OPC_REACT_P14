/**
 * Interface for employee form data used throughout the application.
 *
 * This interface defines the structure for employee data as entered in various forms across the application.
 * It ensures that all components handling employee data maintain a consistent structure.
 */
export interface EmployeeFormData {
	/**
	 * First name of the employee.
	 */
	firstName: string;

	/**
	 * Last name of the employee.
	 */
	lastName: string;

	/**
	 * Date of birth of the employee, expected to be in the format MM/DD/YYYY.
	 */
	dateOfBirth: string;

	/**
	 * Start date of the employee's employment, expected to be in the format MM/DD/YYYY.
	 */
	startDate: string;

	/**
	 * Street address of the employee.
	 */
	street: string;

	/**
	 * City of residence of the employee.
	 */
	city: string;

	/**
	 * State of residence of the employee.
	 */
	state: string;

	/**
	 * Zip code of the employee's address.
	 */
	zipCode: string;

	/**
	 * Department the employee belongs to.
	 */
	department: string;
}
