import React, { useState, useEffect } from "react";
import { FormFieldProps } from "@/types/formFieldTypes"; // Assurez-vous que le chemin d'importation est correct
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import Select from "@atoms/Select";

/**
 * FormField component that wraps input elements like Input and Select with label and error handling.
 * It provides a consistent interface for form fields, including validation feedback.
 *
 * @param {FormFieldProps} props - Props for FormField component
 * @param {string} props.label - Label text for the form field.
 * @param {string} props.id - Unique identifier for the form field.
 * @param {string} [props.type='text'] - Type of the input, defaults to 'text'.
 * @param {string} [props.error] - Error message to display when validation fails.
 * @param {Array<{value: string; label: string}>} [props.options] - Options for the select element, if applicable.
 * @param {string} [props.className] - Additional CSS classes for styling the form field container.
 * @param {string} [props.inputClassName] - Additional CSS classes for styling the input or select element.
 * @param {string} [props.value] - Controlled value of the input or select.
 * @param {string} [props.name] - Name attribute for the input or select.
 * @param {Rule} [props.rules] - Validation rules for the input or select.
 * @param {(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void} [props.onChange] - Change handler for the input or select.
 * @returns {React.ReactElement} A styled form field with label and optional error message.
 */

const FormField: React.FC<FormFieldProps> = ({
	label,
	id,
	type = "text",
	error,
	options,
	className,
	inputClassName,
	value,
	name,
	rules,
	onChange,
	...rest
}) => {
	const [fieldError, setFieldError] = useState<string | undefined>(error);

	useEffect(() => {
		setFieldError(error);
	}, [error]);

	const handleBlur = () => {
		if (rules?.required && !value) {
			setFieldError(rules.message || "This field is required");
		} else {
			setFieldError(undefined);
		}
	};

	const inputElement = options ? (
		<Select
			id={id}
			options={options}
			className={inputClassName}
			value={value}
			name={name}
			onBlur={handleBlur}
			onChange={onChange}
			{...rest}
		/>
	) : (
		<Input
			id={id}
			type={type}
			className={inputClassName}
			value={value}
			name={name}
			onBlur={handleBlur}
			onChange={onChange}
			{...rest}
		/>
	);

	return (
		<div className={`mb-4 ${className}`}>
			<Label htmlFor={id} text={label} />
			{inputElement}
			{fieldError && (
				<p className='text-error-text text-sm mt-1'>{fieldError}</p>
			)}
		</div>
	);
};

export default FormField;
