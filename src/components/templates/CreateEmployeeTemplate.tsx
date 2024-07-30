import React from "react";
import { EmployeeForm } from "@/index";

/**
 * Represents the template component for creating a new employee.
 *
 * This component serves as a template for the employee creation page. It includes a title
 * and the `EmployeeForm` component which handles the form submission and data management.
 *
 * @component
 * @example
 * return (
 *   <CreateEmployeeTemplate />
 * )
 */
const CreateEmployeeTemplate: React.FC = () => (
	<div className='flex flex-col items-center'>
		<h2 className='text-2xl font-semibold mb-6'>Create Employee</h2>
		<EmployeeForm />
	</div>
);

export default CreateEmployeeTemplate;
