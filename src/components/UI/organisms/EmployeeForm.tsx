import React, { useState, useContext } from "react";
import { FormField, Button, Label } from "@/index";
import { validate } from "@/utils/formValidation";
import { fieldRules } from "@/config/fieldRules";
import { departmentOptions } from "@/utils/departmentOptions";
import { states } from "@/utils/states";
import EmployeeContext from "@/context/EmployeeContext";
import { EmployeeFormData } from "@/types/employeeTypes";
import { DatePicker, Combobox, useToast } from "opc-ui";

const EmployeeForm: React.FC = () => {
	const context = useContext(EmployeeContext);
	if (!context) {
		throw new Error("EmployeeForm must be used within an EmployeeProvider");
	}
	const { addEmployee } = context;
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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newErrors = validate(formData);
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			toast({
				title: "Please fill in all fields correctly.",
				variant: "destructive",
			});
		} else {
			addEmployee(formData);
			toast({ title: "Employee created successfully!" });
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
	};

	const addressFields = [
		{ label: "Street", id: "street", name: "street", rules: fieldRules.street },
		{ label: "City", id: "city", name: "city", rules: fieldRules.city },
		{
			label: "Zip Code",
			id: "zipCode",
			name: "zipCode",
			rules: fieldRules.zipCode,
		},
	];

	return (
		<div className='max-w-4xl mx-auto p-6 bg-secondary shadow-lg rounded-lg transition-[background-color] duration-300 ease-in-out'>
			<form onSubmit={handleSubmit} className='space-y-6' noValidate>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					<FormField
						label='First Name'
						id='firstName'
						type='text'
						value={formData.firstName}
						onChange={(value: string) => handleChange(value, "firstName")}
						name='firstName'
						rules={fieldRules.firstName}
						error={errors.firstName}
						placeholder='John'
					/>
					<FormField
						label='Last Name'
						id='lastName'
						type='text'
						value={formData.lastName}
						onChange={(value: string) => handleChange(value, "lastName")}
						name='lastName'
						rules={fieldRules.lastName}
						error={errors.lastName}
						placeholder='Doe'
					/>
					<div>
						<Label
							htmlFor='dateOfBirth'
							className={errors.dateOfBirth ? "text-destructive" : ""}
						>
							Date of Birth
						</Label>
						<DatePicker
							id='dateOfBirth'
							value={formData.dateOfBirth}
							onChange={(date: string | null) =>
								handleChange(date || "", "dateOfBirth")
							}
							error={errors.dateOfBirth}
							disableFutureDates={true}
							dateFormat='MM/DD/YYYY'
							locale='en-US'
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
								value={formData[field.name as keyof EmployeeFormData]}
								onChange={(value: string) => handleChange(value, field.name)}
								name={field.name}
								rules={field.rules}
								error={errors[field.name as keyof EmployeeFormData]}
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
					>
						Clear
					</Button>
					<Button type='submit'>Save</Button>
				</div>
			</form>
		</div>
	);
};

export default EmployeeForm;
