import React, { useState, useContext } from "react";
import FormField from "../molecules/FormField";
import AddressFieldSet from "../molecules/AddressFieldSet";
import Button from "../atoms/Button";
import { validate } from "@/utils/validation";
import EmployeeContext from "@/context/EmployeeContext";

export interface EmployeeFormData {
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
	const employeeContext = useContext(EmployeeContext);
	if (!employeeContext) {
		throw new Error("EmployeeContext not available");
	}
	const { addEmployee } = employeeContext;
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
		<div className='container mx-auto p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'>
			<h2 className='text-2xl font-bold mb-6'>Create Employee</h2>
			<form onSubmit={handleSubmit} className='space-y-6' noValidate>
				<div className='flex flex-wrap -mx-4'>
					<div className='w-full md:w-1/2 px-4 space-y-4'>
						<FormField
							label='First Name'
							id='firstName'
							type='text'
							value={formData.firstName}
							onChange={handleChange}
							name='firstName'
							rules={{ required: true, message: "First Name is required" }}
							error={errors.firstName}
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500'
						/>
						<FormField
							label='Last Name'
							id='lastName'
							type='text'
							value={formData.lastName}
							onChange={handleChange}
							name='lastName'
							rules={{ required: true, message: "Last Name is required" }}
							error={errors.lastName}
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500'
						/>
						<FormField
							label='Date of Birth'
							id='dateOfBirth'
							type='date'
							value={formData.dateOfBirth}
							onChange={handleChange}
							name='dateOfBirth'
							rules={{ required: true, message: "Date of Birth is required" }}
							error={errors.dateOfBirth}
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500'
						/>
						<FormField
							label='Start Date'
							id='startDate'
							type='date'
							value={formData.startDate}
							onChange={handleChange}
							name='startDate'
							rules={{ required: true, message: "Start Date is required" }}
							error={errors.startDate}
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500'
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
							rules={{ required: true, message: "Department is required" }}
							error={errors.department}
							inputClassName='outline-none border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500'
						/>
					</div>
					<div className='w-full md:w-1/2 px-4 space-y-4'>
						<AddressFieldSet
							className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700'
							inputClassName='border-2 border-gray-300 dark:border-gray-700 rounded-md p-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500'
							street={formData.street}
							city={formData.city}
							state={formData.state}
							zipCode={formData.zipCode}
							onStreetChange={handleChange}
							onCityChange={handleChange}
							onStateChange={handleChange}
							onZipCodeChange={handleChange}
							rules={{
								street: { required: true, message: "Street is required" },
								city: { required: true, message: "City is required" },
								state: { required: true, message: "State is required" },
								zipCode: { required: true, message: "Zip Code is required" },
							}}
							errors={{
								street: errors.street,
								city: errors.city,
								state: errors.state,
								zipCode: errors.zipCode,
							}}
						/>
					</div>
				</div>
				<Button
					type='submit'
					className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out'
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
