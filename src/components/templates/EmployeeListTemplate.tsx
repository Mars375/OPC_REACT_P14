import React from "react";
import EmployeeTable from "@/components/UI/organisms/EmployeeTable";

const CreateEmployeeTemplate: React.FC = () => {
	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-2xl font-semibold mb-6'>Current Employees</h2>
			<EmployeeTable />
		</div>
	);
};

export default CreateEmployeeTemplate;
