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
		<div className='flex items-center justify-center h-full bg-gray-100 dark:bg-gray-900'>
			<div className='max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
				<h2 className='text-2xl font-semibold text-gray-darkest dark:text-gray-100 mb-6'>
					Create Employee
				</h2>
				<form onSubmit={handleSubmit} className='space-y-6' noValidate>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<FormField
							label='First Name'
							id='firstName'
							type='text'
							value={formData.firstName}
							onChange={handleChange}
							name='firstName'
							placeholder='John'
							rules={fieldRules.firstName}
							error={errors.firstName}
							inputClassName='border border-gray-300 dark:border-gray-700 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-12'
						/>
						<FormField
							label='Last Name'
							id='lastName'
							type='text'
							value={formData.lastName}
							onChange={handleChange}
							name='lastName'
							placeholder='Doe'
							rules={fieldRules.lastName}
							error={errors.lastName}
							inputClassName='border border-gray-300 dark:border-gray-700 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-12'
						/>
						<FormField
							label='Date of Birth'
							id='dateOfBirth'
							type='date'
							value={formData.dateOfBirth}
							onChange={handleChange}
							name='dateOfBirth'
							placeholder='1990-01-01'
							rules={fieldRules.dateOfBirth}
							error={errors.dateOfBirth}
							inputClassName='border border-gray-300 dark:border-gray-700 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-12'
						/>
						<FormField
							label='Start Date'
							id='startDate'
							type='date'
							value={formData.startDate}
							onChange={handleChange}
							name='startDate'
							placeholder='2022-01-01'
							rules={fieldRules.startDate}
							error={errors.startDate}
							inputClassName='border border-gray-300 dark:border-gray-700 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-12'
						/>
						<FormField
							label='Department'
							id='department'
							options={departmentOptions}
							value={formData.department}
							onChange={handleChange}
							name='department'
							rules={fieldRules.department}
							placeholder='Select Department'
							error={errors.department}
							inputClassName='border border-gray-300 dark:border-gray-700 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-12'
						/>
					</div>
					<div className='mt-4'>
						<h3 className='text-lg font-semibold text-gray-darkest dark:text-gray-100 mb-4'>
							Address
						</h3>
						<AddressFieldSet
							className='grid grid-cols-1 md:grid-cols-2 gap-4'
							inputClassName='border border-gray-300 dark:border-gray-700 rounded p-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-12'
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
					</div>
					<Button
						type='submit'
						className='bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded shadow-md transition duration-300'
					>
						Save
					</Button>
				</form>

				{showConfirmation && (
					<ConfirmationMessage
						message={{
							text: "Employee created successfully!",
							type: "success",
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default EmployeeForm;
