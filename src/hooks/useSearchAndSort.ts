import { useState, useEffect, useRef } from "react";
import { EmployeeFormData } from "@/types/employeeTypes";
import { filterEmployees, sortEmployees } from "@/utils/filterAndSortEmployees";

/**
 * Custom hook for searching and sorting employee data.
 *
 * This hook manages the state related to search terms and sorting configurations for employee data.
 * It automatically updates the filtered list of employees whenever the search term or sort configuration changes.
 *
 * @param {EmployeeFormData[] | null} employees - The list of employees to be searched and sorted.
 * @returns An object containing search and sort states and functions to manipulate them.
 */
const useSearchAndSort = (employees: EmployeeFormData[] | null) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredEmployees, setFilteredEmployees] = useState<
		EmployeeFormData[]
	>([]);
	const [sortConfig, setSortConfig] = useState<{
		key: keyof EmployeeFormData;
		direction: string;
	}>({ key: "firstName", direction: "ascending" });

	const gotoPageRef = useRef<(pageIndex: number) => void>(() => {});

	useEffect(() => {
		if (employees) {
			// Filter and sort employees based on the current search term and sort configuration
			let filtered = filterEmployees(employees, searchTerm);
			filtered = sortEmployees(filtered, sortConfig);
			setFilteredEmployees(filtered);
			gotoPageRef.current(0); // Reset pagination to the first page after filtering/sorting
		}
	}, [searchTerm, employees, sortConfig]);

	return {
		searchTerm,
		setSearchTerm,
		filteredEmployees,
		sortConfig,
		setSortConfig,
		gotoPageRef,
	};
};

export default useSearchAndSort;
