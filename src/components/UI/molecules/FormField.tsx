import React, { useState, useEffect } from "react";
import { FormFieldProps } from "@/types/formFieldTypes";
import { Input, Label, Select } from "@/index";

const FormField: React.FC<FormFieldProps> = ({
	label,
	id,
	type = "text",
	error,
	options,
	className,
	value,
	name,
	rules,
	onChange,
	color = "primary",
	size = "medium",
	...rest
}) => {
	const [fieldError, setFieldError] = useState<string | undefined>(error);
	const [inputType, setInputType] = useState<string>(
		type === "date" ? "text" : type
	);

	useEffect(() => {
		setFieldError(error);
	}, [error]);

	const validateField = (value: string, name: string) => {
		if (rules?.required && !value) {
			return rules.required;
		} else if (
			rules?.pattern &&
			value &&
			!new RegExp(rules.pattern.value).test(value.toString())
		) {
			return rules.pattern.message;
		} else if (name === "dateOfBirth" && new Date(value) > new Date()) {
			return "Date of birth cannot be in the future";
		} else if (name === "startDate" && new Date(value) < new Date()) {
			return "Start date cannot be in the past";
		}
		return undefined;
	};

	const handleBlur = () => {
		if (name) {
			const error = validateField(value?.toString() || "", name);
			setFieldError(error);
		}
		if (type === "date") {
			setInputType("text");
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		onChange?.(e);
		const newValue = e.target.value;
		if (name) {
			const error = validateField(newValue, name);
			setFieldError(error);
		}
	};

	const inputElement = options ? (
		<Select
			id={id}
			options={options}
			renderOption={(option) => option.label}
			getOptionValue={(option) => option.value}
			value={value}
			name={name}
			onBlur={handleBlur}
			onChange={handleChange}
			aria-invalid={!!fieldError}
			fieldError={fieldError}
			color={fieldError ? "error" : color}
			size={size}
			{...rest}
		/>
	) : (
		<Input
			id={id}
			type={inputType}
			value={value}
			name={name}
			onBlur={handleBlur}
			onChange={handleChange}
			aria-invalid={!!fieldError}
			fieldError={fieldError}
			color={fieldError ? "error" : color}
			size={size}
			{...rest}
		/>
	);

	return (
		<div className='flex flex-col'>
			<div className={`${className}`}>
				<Label
					htmlFor={id}
					text={label}
					className={`transition-all duration-200 ease-in-out ${
						fieldError ? "text-destructive" : ""
					}`}
				/>
				{inputElement}
			</div>
			{fieldError && (
				<p className='text-destructive text-sm mt-1'>{fieldError}</p>
			)}
		</div>
	);
};

export default FormField;
