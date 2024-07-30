import React from "react";
import { EmployeeTable } from "@/index";
import { EmployeeFormData } from "@/types/employeeTypes";

/**
 * Interface for EmployeeListTemplate props.
 * @interface
 * @property {EmployeeFormData[] | null} employees - An array of employee data or null.
 */
interface EmployeeListTemplateProps {
	employees: EmployeeFormData[] | null;
}

/**
 * Represents the template component for listing employees.
 *
 * This component displays a list of current employees using the `EmployeeTable` component.
 * It accepts an array of employee data and passes it to the `EmployeeTable` for rendering.
 *
 * @component
 * @example
 * const employeesData = [{ id: 1, name: "John Doe", department: "Finance" }];
 * return (
 *   <EmployeeListTemplate employees={employeesData} />
 * )
 */
const EmployeeListTemplate: React.FC<EmployeeListTemplateProps> = ({
	employees,
}) => (
	<div className='flex flex-col items-center'>
		<h2 className='text-2xl font-semibold mb-6'>Current Employees</h2>
		<EmployeeTable employees={employees} />
	</div>
);

export default EmployeeListTemplate;
