import React, { useState } from "react";
import FormField from "../molecules/FormField";
import AddressFieldSet from "../molecules/AddressFieldSet";
import Button from "../atoms/Button";

interface EmployeeFormData {
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	startDate: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	department: string;
}

const EmployeeForm: React.FC = () => {
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

	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const employees = JSON.parse(localStorage.getItem("employees") || "[]");
		employees.push(formData);
		localStorage.setItem("employees", JSON.stringify(employees));
		setShowConfirmation(true);
	};

	return (
		<div className='container mx-auto p-4 bg-white dark:bg-background-dark text-gray-900 dark:text-text-dark'>
			<h2 className='text-xl font-bold mb-4'>Create Employee</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div className='flex flex-wrap -mx-4'>
					<div className='w-full md:w-1/2 px-4'>
						<FormField
							label='First Name'
							id='firstName'
							type='text'
							value={formData.firstName}
							onChange={handleChange}
							name='firstName'
							inputClassName='outline-none border-2 border-gray-300 dark:border-dark-border rounded-md p-2 focus:ring-2 focus:ring-primary-500'
						/>
						<FormField
							label='Last Name'
							id='lastName'
							type='text'
							value={formData.lastName}
							onChange={handleChange}
							name='lastName'
						/>
						<FormField
							label='Date of Birth'
							id='dateOfBirth'
							type='date'
							value={formData.dateOfBirth}
							onChange={handleChange}
							name='dateOfBirth'
						/>
						<FormField
							label='Start Date'
							id='startDate'
							type='date'
							value={formData.startDate}
							onChange={handleChange}
							name='startDate'
						/>
						<FormField
							label='Department'
							id='department'
							options={[
								{ value: "Sales", label: "Sales" },
								{ value: "Marketing", label: "Marketing" },
								{ value: "Engineering", label: "Engineering" },
								{ value: "Human Resources", label: "Human Resources" },
								{ value: "Legal", label: "Legal" },
							]}
							value={formData.department}
							onChange={handleChange}
							name='department'
						/>
					</div>
					<div className='w-full md:w-1/2 px-4'>
						<AddressFieldSet
							className='bg-gray-100 dark:bg-gray-800 p-4'
							inputClassName='border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-2 focus:ring-primary-500'
							street={formData.street}
							city={formData.city}
							state={formData.state}
							zipCode={formData.zipCode}
							onStreetChange={handleChange}
							onCityChange={handleChange}
							onStateChange={handleChange}
							onZipCodeChange={handleChange}
						/>
					</div>
				</div>
				<Button type='submit' className='bg-primary text-white p-2 rounded'>
					Save
				</Button>
			</form>

			{showConfirmation && (
				<div id='confirmation' className='modal'>
					Employee Created!
				</div>
			)}
		</div>
	);
};

export default EmployeeForm;
