import { EmployeeFormData } from "@/types/employeeTypes";

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
