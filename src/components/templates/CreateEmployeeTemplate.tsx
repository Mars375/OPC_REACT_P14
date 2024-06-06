import React from "react";
import EmployeeForm from "@organisms/EmployeeForm";
import { Link } from "react-router-dom";

const CreateEmployeeTemplate: React.FC = () => {
	return (
		<div className='container mx-auto p-4'>
			<Link
				to='/employee-list'
				className='mb-4 text-primary-500 hover:underline'
			>
				View Current Employees
			</Link>
			<EmployeeForm />
		</div>
	);
};

export default CreateEmployeeTemplate;
