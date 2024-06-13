import { createContext } from "react";
import { EmployeeFormData } from "@/types/employeeTypes";

interface EmployeeContextProps {
	employees: EmployeeFormData[];
	addEmployee: (employee: EmployeeFormData) => void;
}

const EmployeeContext = createContext<EmployeeContextProps | undefined>(
	undefined
);

export default EmployeeContext;
