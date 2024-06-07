import React, { useState, ReactNode } from "react";
import EmployeeContext from "@/context/EmployeeContext";
import { EmployeeFormData } from "@organisms/EmployeeForm";

export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [employees, setEmployees] = useState<EmployeeFormData[]>([]);

	const addEmployee = (employee: EmployeeFormData) => {
		setEmployees([...employees, employee]);
	};

	return (
		<EmployeeContext.Provider value={{ employees, addEmployee }}>
			{children}
		</EmployeeContext.Provider>
	);
};
