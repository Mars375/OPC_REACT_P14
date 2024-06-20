import React from "react";
import EmployeeTable from "@/components/UI/organisms/EmployeeTable";

const CreateEmployeeTemplate: React.FC = () => {
	return (
		<div className='max-w-4xl mx-auto p-4'>
			<EmployeeTable />
		</div>
	);
};

export default CreateEmployeeTemplate;
