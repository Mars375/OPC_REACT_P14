import { EmployeeFormData } from "@/types/employeeTypes";

/**
 * Requests a sort operation based on a specified key and current sort configuration.
 *
 * @param {keyof EmployeeFormData} key - The key to sort by.
 * @param {{ key: keyof EmployeeFormData; direction: string }} sortConfig - Current sort configuration.
 * @param {React.Dispatch<React.SetStateAction<{ key: keyof EmployeeFormData; direction: string }>>} setSortConfig - Function to set the new sort configuration.
 */
export const requestSort = (
	key: keyof EmployeeFormData,
	sortConfig: { key: keyof EmployeeFormData; direction: string },
	setSortConfig: React.Dispatch<
		React.SetStateAction<{ key: keyof EmployeeFormData; direction: string }>
	>
) => {
	let direction = "ascending";
	if (
		sortConfig &&
		sortConfig.key === key &&
		sortConfig.direction === "ascending"
	) {
		direction = "descending";
	}
	setSortConfig({ key, direction });
};

/**
 * Determines if the sorting is in ascending order based on the given key.
 *
 * @param {keyof EmployeeFormData} key - The key to check.
 * @param {{ key: keyof EmployeeFormData; direction: string }} sortConfig - Current sort configuration.
 * @returns {boolean} True if sorted ascending on the specified key.
 */
export const isSortedAscending = (
	key: keyof EmployeeFormData,
	sortConfig: { key: keyof EmployeeFormData; direction: string }
) => {
	return sortConfig.key === key && sortConfig.direction === "ascending";
};

/**
 * Determines if the sorting is in descending order based on the given key.
 *
 * @param {keyof EmployeeFormData} key - The key to check.
 * @param {{ key: keyof EmployeeFormData; direction: string }} sortConfig - Current sort configuration.
 * @returns {boolean} True if sorted descending on the specified key.
 */
export const isSortedDescending = (
	key: keyof EmployeeFormData,
	sortConfig: { key: keyof EmployeeFormData; direction: string }
) => {
	return sortConfig.key === key && sortConfig.direction === "descending";
};
