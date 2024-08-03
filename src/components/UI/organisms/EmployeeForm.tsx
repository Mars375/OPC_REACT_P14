import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormField, Button, Label } from "@/index";
import { validate } from "@/utils/formValidation";
import { fieldRules } from "@/config/fieldRules";
import { departmentOptions } from "@/utils/departmentOptions";
import { states } from "@/utils/states";
import { EmployeeFormData } from "@/types/employeeTypes";
import { DatePicker, Combobox, useToast } from "opc-ui";
import { addEmployee } from "@/redux/employeeSlice";

/**
 * EmployeeForm component for creating or editing employee records.
 *
 * This form includes fields for personal details, address, and employment details.
 * It validates inputs and displays errors where necessary using a custom validation logic.
 */
const EmployeeForm: React.FC = () => {
	const dispatch = useDispatch();
	const { toast } = useToast();

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

	// Handles changes in form fields and updates state
	const handleChange = (value: string, name: string) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: "",
		}));
	};

	// Submits the form data after validation
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newErrors = validate(formData);
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			toast({
				title: "Error : Please fill in all fields correctly.",
				variant: "destructive",
			});
			console.log("Error: Please fill in all fields correctly.");
		} else {
			dispatch(addEmployee(formData));
			toast({ title: "Employee created successfully!" });
			console.log("Employee Validated");
		}
	};

	// Clears all form fields
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
	};

	const addressFields = [
		{
			label: "Street",
			id: "street",
			name: "street",
			placeholder: "123 Main St",
			rules: fieldRules.street,
		},
		{
			label: "City",
			id: "city",
			name: "city",
			placeholder: "Anytown",
			rules: fieldRules.city,
		},
		{
			label: "Zip Code",
			id: "zipCode",
			name: "zipCode",
			placeholder: "12345",
			rules: fieldRules.zipCode,
		},
	];

	return (
		<div className='max-w-4xl mx-auto p-6 bg-secondary shadow-lg rounded-lg transition-[background-color] duration-300 ease-in-out'>
			<form
				onSubmit={handleSubmit}
				className='space-y-6'
				noValidate
				data-testid='employee-form'
			>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<FormField
						aria-label='First Name'
						label='First Name'
						id='firstName'
						type='text'
						value={formData.firstName}
						onChange={(value: string) => handleChange(value, "firstName")}
						name='firstName'
						rules={fieldRules.firstName}
						error={errors.firstName}
						placeholder='John'
						data-testid='first-name-input'
					/>
					<FormField
						aria-label='Last Name'
						label='Last Name'
						id='lastName'
						type='text'
						value={formData.lastName}
						onChange={(value: string) => handleChange(value, "lastName")}
						name='lastName'
						rules={fieldRules.lastName}
						error={errors.lastName}
						placeholder='Doe'
						data-testid='last-name-input'
					/>
					<div>
						<Label
							htmlFor='dateOfBirth'
							className={errors.dateOfBirth ? "text-destructive" : ""}
						>
							Date of Birth
						</Label>
						<DatePicker
							aria-label='Date of Birth (format MM/DD/YYYY)'
							id='dateOfBirth'
							value={formData.dateOfBirth}
							onChange={(date: string | null) =>
								handleChange(date || "", "dateOfBirth")
							}
							error={errors.dateOfBirth}
							dateFormat='MM/DD/YYYY'
							locale='en-US'
							disableFutureDates
						/>
					</div>
					<div>
						<Label
							htmlFor='startDate'
							className={errors.startDate ? "text-destructive" : ""}
						>
							Start Date
						</Label>
						<DatePicker
							aria-label='Start Date (format MM/DD/YYYY)'
							id='startDate'
							value={formData.startDate}
							onChange={(date: string | null) =>
								handleChange(date || "", "startDate")
							}
							error={errors.startDate}
							dateFormat='MM/DD/YYYY'
							locale='en-US'
						/>
					</div>
					<div>
						<Label
							htmlFor='department'
							className={errors.department ? "text-destructive" : ""}
						>
							Department
						</Label>
						<Combobox
							id='department'
							options={departmentOptions}
							value={formData.department}
							onChange={(value: string) => handleChange(value, "department")}
							name='department'
							error={errors.department}
							data-testid='department-combobox'
						/>
					</div>
				</div>
				<div className='mt-4'>
					<h3 className='text-lg font-semibold mb-4'>Address</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{addressFields.map((field) => (
							<FormField
								key={field.id}
								label={field.label}
								id={field.id}
								type='text'
								placeholder={field.placeholder}
								value={formData[field.name as keyof EmployeeFormData]}
								onChange={(value: string) => handleChange(value, field.name)}
								name={field.name}
								rules={field.rules}
								error={errors[field.name as keyof EmployeeFormData]}
								data-testid={`${field.name}-input`}
								aria-label={`${field.label}`}
							/>
						))}
						<div>
							<Label
								htmlFor='state'
								className={errors.state ? "text-destructive" : ""}
							>
								State
							</Label>
							<Combobox
								id='state'
								options={states}
								value={formData.state}
								onChange={(value: string) => handleChange(value, "state")}
								name='state'
								error={errors.state}
								className='w-full'
								data-testid='state-combobox'
							/>
						</div>
					</div>
				</div>
				<div className='flex justify-end space-x-4'>
					<Button
						type='button'
						onClick={handleClear}
						variant='outlined'
						color='secondary'
						data-testid='clear-button'
						tabIndex={0}
					>
						Clear
					</Button>
					<Button
						type='submit'
						data-testid='submit-button'
						disabled={
							Object.values(formData).some((value) => !value) ||
							Object.values(errors).some((error) => error)
						}
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
};

export default EmployeeForm;
