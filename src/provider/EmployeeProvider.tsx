import React, { useState, useEffect, ReactNode } from "react";
import EmployeeContext from "@/context/EmployeeContext";
import { EmployeeFormData } from "@/types/employeeTypes";

export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [employees, setEmployees] = useState<EmployeeFormData[]>(() => {
		const savedEmployees = localStorage.getItem("employees");
		return savedEmployees ? JSON.parse(savedEmployees) : [];
	});

	useEffect(() => {
		localStorage.setItem("employees", JSON.stringify(employees));
	}, [employees]);

	const addEmployee = (employee: EmployeeFormData) => {
		setEmployees([...employees, employee]);
	};

	return (
		<EmployeeContext.Provider value={{ employees, addEmployee }}>
			{children}
		</EmployeeContext.Provider>
	);
};
