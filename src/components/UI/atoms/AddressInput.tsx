import React from "react";
import { AddressFieldProps } from "@/types/addressFieldTypes";
import FormField from "../molecules/FormField";

/**
 * AddressInput is an atomic component that renders a text input field.
 * It is designed to be reused in various parts of the application where a text input is needed.
 *
 * @param {AddressFieldProps} props - Props for AddressInput component
 * @returns {React.ReactElement} A styled input field.
 */
const AddressInput: React.FC<AddressFieldProps> = ({
	label,
	id,
	value,
	onChange,
	rules,
	error,
}) => {
	return (
		<FormField
			label={label}
			id={id}
			type='text'
			value={value}
			onChange={onChange}
			name={id}
			rules={rules}
			error={error}
		/>
	);
};
export default AddressInput;
