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
