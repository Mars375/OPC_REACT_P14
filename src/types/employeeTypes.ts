/**
 * EmployeeFormData defines the structure for employee data used in forms.
 * This interface is used to type-check the form data related to employee details,
 * ensuring that all necessary fields are included and correctly typed.
 *
 * @property {string} firstName - The first name of the employee.
 * @property {string} lastName - The last name of the employee.
 * @property {string} dateOfBirth - The date of birth of the employee, formatted as YYYY-MM-DD.
 * @property {string} startDate - The start date of the employee's employment, formatted as YYYY-MM-DD.
 * @property {string} street - The street part of the employee's address.
 * @property {string} city - The city part of the employee's address.
 * @property {string} state - The state part of the employee's address.
 * @property {string} zipCode - The ZIP code part of the employee's address.
 * @property {string} department - The department the employee belongs to.
 */
export interface EmployeeFormData {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	startDate: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	department: string;
}
