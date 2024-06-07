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
		<div className='container mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'>
			<h2 className='text-2xl font-bold mb-6'>Create Employee</h2>
			<form onSubmit={handleSubmit} className='space-y-6'>
				<div className='flex flex-wrap -mx-4'>
					<div className='w-full md:w-1/2 px-4 space-y-4'>
						<FormField
							label='First Name'
							id='firstName'
							type='text'
							value={formData.firstName}
							onChange={handleChange}
							name='firstName'
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
						/>
						<FormField
							label='Last Name'
							id='lastName'
							type='text'
							value={formData.lastName}
							onChange={handleChange}
							name='lastName'
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
						/>
						<FormField
							label='Date of Birth'
							id='dateOfBirth'
							type='date'
							value={formData.dateOfBirth}
							onChange={handleChange}
							name='dateOfBirth'
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
						/>
						<FormField
							label='Start Date'
							id='startDate'
							type='date'
							value={formData.startDate}
							onChange={handleChange}
							name='startDate'
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
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
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
						/>
					</div>
					<div className='w-full md:w-1/2 px-4 space-y-4'>
						<AddressFieldSet
							className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'
							inputClassName='border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500'
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
				<Button
					type='submit'
					className='bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md'
				>
					Save
				</Button>
			</form>

			{showConfirmation && (
				<div
					id='confirmation'
					className='mt-4 p-4 bg-green-100 text-green-700 rounded-md'
				>
					Employee Created!
				</div>
			)}
		</div>
	);
};

export default EmployeeForm;
