import React from "react";
import { EmployeeTable } from "@/index";
import { EmployeeFormData } from "@/types/employeeTypes";

const CreateEmployeeTemplate: React.FC<{
	employees: EmployeeFormData[] | null;
}> = ({ employees }) => {
	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-2xl font-semibold mb-6'>Current Employees</h2>
			<EmployeeTable employees={employees} />
		</div>
	);
};

export default CreateEmployeeTemplate;
