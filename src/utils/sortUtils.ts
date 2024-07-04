import { EmployeeFormData } from "@/types/employeeTypes";

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

export const isSortedAscending = (
	key: keyof EmployeeFormData,
	sortConfig: { key: keyof EmployeeFormData; direction: string }
) => {
	return sortConfig.key === key && sortConfig.direction === "ascending";
};

export const isSortedDescending = (
	key: keyof EmployeeFormData,
	sortConfig: { key: keyof EmployeeFormData; direction: string }
) => {
	return sortConfig.key === key && sortConfig.direction === "descending";
};
