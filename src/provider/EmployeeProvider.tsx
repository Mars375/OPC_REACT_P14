import React, { useState, useEffect, ReactNode } from "react";
import EmployeeContext from "@/context/EmployeeContext";
import { EmployeeFormData } from "@/types/employeeTypes";

/**
 * Provides the employee context to child components.
 *
 * This provider component manages the employee data using React's Context API. It handles
 * loading employee data from localStorage on initialization, updating localStorage when
 * employees are added, and providing a method to add new employees.
 *
 * @param {ReactNode} children - The child components that will consume the context.
 * @returns {JSX.Element} A context provider wrapping children with employee data and actions.
 */
export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [employees, setEmployees] = useState<EmployeeFormData[]>(() => {
		// Initialize state with employees from localStorage if available
		const savedEmployees = localStorage.getItem("employees");
		return savedEmployees ? JSON.parse(savedEmployees) : [];
	});

	useEffect(() => {
		// Update localStorage whenever the employees state changes
		localStorage.setItem("employees", JSON.stringify(employees));
	}, [employees]);

	const addEmployee = (employee: EmployeeFormData) => {
		// Add a new employee to the current list of employees
		setEmployees([...employees, employee]);
	};

	return (
		<EmployeeContext.Provider value={{ employees, addEmployee }}>
			{children}
		</EmployeeContext.Provider>
	);
};
