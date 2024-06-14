import React, { useState, useContext } from "react";
import { FormField, AddressFieldSet } from "../molecules";
import { Button, ConfirmationMessage } from "../atoms";
import { validate } from "@/utils/formValidation";
import { fieldRules } from "@/config/fieldRules";
import { departmentOptions } from "@/utils/departmentOptions";
import EmployeeContext from "@/context/EmployeeContext";
import { EmployeeFormData } from "@/types/employeeTypes";

const EmployeeForm: React.FC = () => {
	const context = useContext(EmployeeContext);
	if (!context) {
		throw new Error("EmployeeForm must be used within an EmployeeProvider");
	}
	const { addEmployee } = context;

	const [formData, setFormData] = useState<EmployeeFormData>({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		startDate: "",
		street: "",
		city: "",
		state: "",
		zipCode: "",
		department: "",
	});

	const [errors, setErrors] = useState<Partial<EmployeeFormData>>({});
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setErrors({
			...errors,
			[e.target.name]: "",
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newErrors = validate(formData);
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			addEmployee(formData);
			setShowConfirmation(true);
		}
	};

	return (
		<div className='container mx-auto p-6 bg-white dark:bg-gray-darker text-gray-darkest dark:text-gray-light rounded-lg shadow-lg border border-gray dark:border-gray-dark'>
			<h2 className='text-2xl font-bold mb-6'>Create Employee</h2>
			<form onSubmit={handleSubmit} className='space-y-6' noValidate>
				<FormField
					label='First Name'
					id='firstName'
					type='text'
					value={formData.firstName}
					onChange={handleChange}
					name='firstName'
					rules={fieldRules.firstName}
					error={errors.firstName}
					inputClassName='outline-none border-2 border-gray dark:border-gray-dark rounded-md p-2 focus:ring-2 focus:ring-primary dark:focus:ring-secondary'
				/>
				<FormField
					label='Last Name'
					id='lastName'
					type='text'
					value={formData.lastName}
					onChange={handleChange}
					name='lastName'
					rules={fieldRules.lastName}
					error={errors.lastName}
					inputClassName='outline-none border-2 border-gray dark:border-gray-dark rounded-md p-2 focus:ring-2 focus:ring-primary dark:focus:ring-secondary'
				/>
				<FormField
					label='Date of Birth'
					id='dateOfBirth'
					type='date'
					value={formData.dateOfBirth}
					onChange={handleChange}
					name='dateOfBirth'
					rules={fieldRules.dateOfBirth}
					error={errors.dateOfBirth}
					inputClassName='outline-none border-2 border-gray dark:border-gray-dark rounded-md p-2 focus:ring-2 focus:ring-primary dark:focus:ring-secondary'
				/>
				<FormField
					label='Start Date'
					id='startDate'
					type='date'
					value={formData.startDate}
					onChange={handleChange}
					name='startDate'
					rules={fieldRules.startDate}
					error={errors.startDate}
					inputClassName='outline-none border-2 border-gray dark:border-gray-dark rounded-md p-2 focus:ring-2 focus:ring-primary dark:focus:ring-secondary'
				/>
				<FormField
					label='Department'
					id='department'
					options={departmentOptions}
					value={formData.department}
					onChange={handleChange}
					name='department'
					rules={fieldRules.department}
					error={errors.department}
					inputClassName='outline-none border-2 border-gray dark:border-gray-dark rounded-md p-2 focus:ring-2 focus:ring-primary dark:focus:ring-secondary'
				/>
				<AddressFieldSet
					className='bg-gray-light dark:bg-gray-darker p-4 rounded-lg shadow-md border border-gray dark:border-gray-dark'
					inputClassName='border-2 border-gray dark:border-gray-dark rounded-md p-2 focus:ring-2 focus:ring-primary dark:focus:ring-secondary'
					street={formData.street}
					city={formData.city}
					state={formData.state}
					zipCode={formData.zipCode}
					onStreetChange={handleChange}
					onCityChange={handleChange}
					onStateChange={handleChange}
					onZipCodeChange={handleChange}
					errors={errors}
				/>
				<Button
					type='submit'
					className='bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out'
				>
					Save
				</Button>
			</form>

			{showConfirmation && (
				<ConfirmationMessage
					message={{ text: "Employee Created!", type: "success" }}
				/>
			)}
		</div>
	);
};

export default EmployeeForm;

// TODO : Do the next page
