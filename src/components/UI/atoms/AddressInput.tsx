import React from "react";
import { AddressFieldProps } from "@/types/addressFieldTypes";
import FormField from "../molecules/FormField";

/**
 * Renders a text input field specifically for addresses.
 * This component is a reusable atomic component that can be used in various parts of the application.
 * It leverages the FormField molecule for consistent form field behavior and styling.
 *
 * @param {AddressFieldProps} props - The properties passed to the address input component.
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
