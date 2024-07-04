import { useState, useEffect, useRef } from "react";
import { EmployeeFormData } from "@/types/employeeTypes";
import { filterEmployees, sortEmployees } from "@/utils/filterAndSortEmployees";

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
			let filtered = filterEmployees(employees, searchTerm);
			filtered = sortEmployees(filtered, sortConfig);
			setFilteredEmployees(filtered);
			gotoPageRef.current(0);
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
