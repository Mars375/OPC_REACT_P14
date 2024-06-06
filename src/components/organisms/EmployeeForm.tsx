import React, { useState } from "react";
import FormField from "../UI/molecules/FormField";
import AddressFieldSet from "../UI/molecules/AddressFieldSet";

const departments = [
	{ value: "Sales", label: "Sales" },
	{ value: "Marketing", label: "Marketing" },
	{ value: "Engineering", label: "Engineering" },
	{ value: "Human Resources", label: "Human Resources" },
	{ value: "Legal", label: "Legal" },
];

const EmployeeForm: React.FC = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		startDate: "",
		department: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const employees = JSON.parse(localStorage.getItem("employees") || "[]");
		employees.push(formData);
		localStorage.setItem("employees", JSON.stringify(employees));
		alert("Employee Created!");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='p-4 bg-gray-100 dark:bg-dark-background'
		>
			<FormField
				label='First Name'
				id='firstName'
				type='text'
				value={formData.firstName}
				onChange={handleChange}
				className='text-lg font-bold dark:text-dark-text'
			/>
			<FormField
				label='Last Name'
				id='lastName'
				type='text'
				value={formData.lastName}
				onChange={handleChange}
				className='text-lg font-bold dark:text-dark-text'
			/>
			<FormField
				label='Date of Birth'
				id='dateOfBirth'
				type='text'
				value={formData.dateOfBirth}
				onChange={handleChange}
				className='text-lg font-bold dark:text-dark-text'
			/>
			<FormField
				label='Start Date'
				id='startDate'
				type='text'
				value={formData.startDate}
				onChange={handleChange}
				className='text-lg font-bold dark:text-dark-text'
			/>
			<FormField
				label='Department'
				id='department'
				options={departments}
				value={formData.department}
				onChange={handleChange}
				className='text-lg font-bold dark:text-dark-text'
			/>
			<AddressFieldSet />
			<button type='submit' className='bg-blue-500 text-white p-2 rounded'>
				Save
			</button>
		</form>
	);
};

export default EmployeeForm;
