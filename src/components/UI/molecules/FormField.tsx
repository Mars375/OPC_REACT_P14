import React from "react";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import Select from "@atoms/Select";

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
	onChange,
	...rest
}) => {
	const inputElement = options ? (
		<Select
			id={id}
			options={options}
			className={inputClassName}
			value={value}
			name={name}
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
			onChange={onChange}
			{...rest}
		/>
	);

	return (
		<div className={`mb-4 ${className}`}>
			<Label htmlFor={id} text={label} />
			{inputElement}
			{error && <p className='text-error mt-1'>{error}</p>}
		</div>
	);
};

export default FormField;
