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

	const handleClear = () => {
		setFormData({
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
		setErrors({});
		setShowConfirmation(false);
	};

	return (
		<div className='max-w-4xl mx-auto p-6 bg-background-light dark:bg-background-dark-2 shadow-lg rounded-lg transition-[background-color] duration-300 ease-in-out'>
			<form onSubmit={handleSubmit} className='space-y-6' noValidate>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<FormField
						label='First Name'
						id='firstName'
						type='text'
						value={formData.firstName}
						onChange={handleChange}
						name='firstName'
						rules={fieldRules.firstName}
						error={errors.firstName}
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
					/>
					<FormField
						label='Choose Department'
						id='department'
						options={departmentOptions}
						value={formData.department}
						onChange={handleChange}
						name='department'
						rules={fieldRules.department}
						error={errors.department}
					/>
				</div>
				<div className='mt-4'>
					<h3 className='text-lg font-semibold mb-4'>Address</h3>
					<AddressFieldSet
						className='grid grid-cols-1 md:grid-cols-2 gap-4'
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
				<div className='flex justify-end space-x-4'>
					<Button
						type='button'
						onClick={handleClear}
						variant='outlined'
						color='secondary'
					>
						Clear
					</Button>
					<Button type='submit'>Save</Button>
				</div>
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
	);
};

export default EmployeeForm;
