import React from "react";
import EmployeeForm from "@organisms/EmployeeForm";

/**
 * Template component for creating an employee.
 * Utilizes TailwindCSS for styling to maintain consistency and responsiveness.
 */
const CreateEmployeeTemplate: React.FC = () => {
	return (
		<div className='max-w-4xl mx-auto p-4'>
			<EmployeeForm />
		</div>
	);
};

export default CreateEmployeeTemplate;
