import React from "react";
import { EmployeeForm } from "@/index";

const CreateEmployeeTemplate: React.FC = () => {
	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-2xl font-semibold mb-6'>Create Employee</h2>
			<EmployeeForm />
		</div>
	);
};

export default CreateEmployeeTemplate;
