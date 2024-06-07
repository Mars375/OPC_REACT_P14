import React, { useState, useEffect } from "react";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import Select from "@atoms/Select";

interface Rule {
	required?: boolean;
	message?: string;
}

interface FormFieldProps {
	label: string;
	id: string;
	type?: string; // 'text', 'number', 'email', etc.
	error?: string;
	options?: { value: string; label: string }[]; // Pour le Select
	className?: string;
	inputClassName?: string; // Pour personnaliser l'input/select
	value?: string;
	name?: string;
	rules?: Rule; // Ajout de la prop rules
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void; // Ajout de la prop onChange
}

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
			{fieldError && <p className='text-error text-sm mt-1'>{fieldError}</p>}
		</div>
	);
};

export default FormField;
