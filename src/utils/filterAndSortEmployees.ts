import { EmployeeFormData } from "@/types/employeeTypes";

/**
 * Filters an array of employees based on a search term.
 *
 * @param {EmployeeFormData[]} employees - The array of employees to filter.
 * @param {string} searchTerm - The term used to filter employees.
 * @returns {EmployeeFormData[]} The filtered array of employees.
 */
export const filterEmployees = (
	employees: EmployeeFormData[],
	searchTerm: string
): EmployeeFormData[] => {
	return employees.filter((employee) =>
		Object.values(employee).some((value) =>
			value.toString().toLowerCase().includes(searchTerm.toLowerCase())
		)
	);
};

/**
 * Sorts an array of employees based on a specified key and direction.
 *
 * @param {EmployeeFormData[]} employees - The array of employees to sort.
 * @param {{ key: keyof EmployeeFormData; direction: string }} sortConfig - Configuration for sorting, including the key to sort by and the direction ('ascending' or 'descending').
 * @returns {EmployeeFormData[]} The sorted array of employees.
 */
export const sortEmployees = (
	employees: EmployeeFormData[],
	sortConfig: { key: keyof EmployeeFormData; direction: string }
): EmployeeFormData[] => {
	return employees.sort((a, b) => {
		if (a[sortConfig.key] < b[sortConfig.key]) {
			return sortConfig.direction === "ascending" ? -1 : 1;
		}
		if (a[sortConfig.key] > b[sortConfig.key]) {
			return sortConfig.direction === "ascending" ? 1 : -1;
		}
		return 0;
	});
};
