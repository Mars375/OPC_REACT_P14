import { createContext } from "react";
import { EmployeeFormData } from "@/components/UI/organisms/EmployeeForm";

interface EmployeeContextProps {
	employees: EmployeeFormData[];
	addEmployee: (employee: EmployeeFormData) => void;
}

const EmployeeContext = createContext<EmployeeContextProps | undefined>(
	undefined
);

export default EmployeeContext;
