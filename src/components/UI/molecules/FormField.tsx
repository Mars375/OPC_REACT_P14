import React, { useState, useEffect } from "react";
import { FormFieldProps } from "@/types/formFieldTypes";
import { Input, Label, Select } from "@/components/UI/atoms";

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
	placeholder,
	color = "primary",
	size = "medium",
	...rest
}) => {
	const [fieldError, setFieldError] = useState<string | undefined>(error);

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
			value={value}
			name={name}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder={placeholder}
			aria-invalid={!!fieldError}
			fieldError={fieldError}
			color={color}
			size={size}
			{...rest}
		/>
	) : (
		<Input
			id={id}
			type={type}
			value={value}
			name={name}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder={placeholder}
			aria-invalid={!!fieldError}
			fieldError={fieldError}
			color={color}
			size={size}
			{...rest}
		/>
	);

	return (
		<div className={`mb-4 ${className}`}>
			<Label htmlFor={id} text={label} />
			{inputElement}
			{fieldError && <p className='text-red-500 text-sm mt-1'>{fieldError}</p>}
		</div>
	);
};

export default FormField;
