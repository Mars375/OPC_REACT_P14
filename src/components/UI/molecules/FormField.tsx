import React, { useState, useEffect } from "react";
import { FormFieldProps } from "@/types/formFieldTypes";
import { Input, Label } from "@/index";

/**
 * FormField component that dynamically renders an input element based on provided props.
 *
 * This component handles input changes, validation, and displays errors. It supports text inputs.
 *
 * @param {FormFieldProps} props - The properties passed to the form field component.
 */
const FormField: React.FC<FormFieldProps> = ({
	label,
	id,
	type = "text",
	error,
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

	// Validates the field value against the provided rules and sets the appropriate error message.
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

	// Handles field blur event to validate and potentially reset input types.
	const handleBlur = () => {
		if (name) {
			const error = validateField(value?.toString() || "", name);
			setFieldError(error);
		}
		if (type === "date") {
			setInputType("text");
		}
	};

	// Handles changes to the input value, validates the field, and calls the onChange prop.
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		const newValue = e.target.value;
		if (name) {
			const error = validateField(newValue, name);
			setFieldError(error);
		}
	};

	return (
		<div className='flex flex-col'>
			<div className={`${className}`}>
				<Label
					htmlFor={id}
					className={`transition-all duration-200 ease-in-out ${
						fieldError ? "text-destructive" : ""
					}`}
				>
					{label}
				</Label>
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
			</div>
			{fieldError && (
				<p className='text-destructive text-sm mt-1'>{fieldError}</p>
			)}
		</div>
	);
};

export default FormField;
