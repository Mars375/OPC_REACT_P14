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
	const [isFocused, setIsFocused] = useState(false);
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
		setIsFocused(false);
		if (name) {
			const error = validateField(value?.toString() || "", name);
			setFieldError(error);
		}
		if (type === "date") {
			setInputType("text");
		}
	};

	const handleFocus = () => {
		setIsFocused(true);
		if (type === "date") {
			setInputType("date");
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
			onFocus={handleFocus}
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
			onFocus={handleFocus}
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
			<div className={`relative ${className}`}>
				<Label
					htmlFor={id}
					text={label}
					className={`absolute left-3 transition-all duration-200 ease-in-out ${
						fieldError ? "text-error-light dark:text-error-dark" : ""
					} ${
						isFocused
							? "top-0 text-xs text-interactive-light dark:text-interactive-dark"
							: value
							? "top-0 text-xs"
							: "top-1/2 transform -translate-y-1/2"
					}`}
				/>
				{inputElement}
			</div>
			{fieldError && <p className='text-red-500 text-sm mt-1'>{fieldError}</p>}
		</div>
	);
};

export default FormField;
