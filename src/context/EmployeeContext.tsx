import { createContext } from "react";
import { EmployeeFormData } from "@/types/employeeTypes";

/**
 * Interface for the properties of the EmployeeContext.
 * @interface
 * @property {EmployeeFormData[]} employees - Array of employee data.
 * @property {(employee: EmployeeFormData) => void} addEmployee - Function to add an employee to the context.
 */
interface EmployeeContextProps {
	employees: EmployeeFormData[];
	addEmployee: (employee: EmployeeFormData) => void;
}

/**
 * Creates a context for managing employee data across the application.
 *
 * This context provides components with access to the list of employees and a method to add new employees.
 * It is intended to be used with a provider that supplies the actual data and implementation of the addEmployee method.
 *
 * @returns {Context<EmployeeContextProps | undefined>} The Employee context with initial state as undefined.
 */
const EmployeeContext = createContext<EmployeeContextProps | undefined>(
	undefined // Initial value set to undefined to indicate no default value
);

export default EmployeeContext;
