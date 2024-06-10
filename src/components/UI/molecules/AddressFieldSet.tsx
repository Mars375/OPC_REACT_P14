import React from "react";
import FormField from "./FormField";
import { AddressFieldSetProps } from "@/types/addressFieldSetTypes";

/**
 * AddressFieldSet component that groups multiple address-related fields.
 * It provides a consistent interface for capturing user address information.
 *
 * @param {AddressFieldSetProps} props - Props for AddressFieldSet component
 * @param {string} props.className - Additional CSS classes for styling the fieldset container.
 * @param {string} props.inputClassName - Additional CSS classes for styling the input elements.
 * @param {string} props.street - Street address value.
 * @param {string} props.city - City name value.
 * @param {string} props.state - State name value.
 * @param {string} props.zipCode - Zip code value.
 * @param {Function} props.onStreetChange - Handler for changes to the street input.
 * @param {Function} props.onCityChange - Handler for changes to the city input.
 * @param {Function} props.onStateChange - Handler for changes to the state select.
 * @param {Function} props.onZipCodeChange - Handler for changes to the zip code input.
 * @param {Object} props.rules - Validation rules for the inputs.
 * @param {Object} props.errors - Error messages for the inputs.
 * @returns {React.ReactElement} A styled fieldset grouping address inputs.
 */

const AddressFieldSet: React.FC<AddressFieldSetProps> = ({
	className,
	inputClassName,
	street,
	city,
	state,
	zipCode,
	onStreetChange,
	onCityChange,
	onStateChange,
	onZipCodeChange,
	rules,
	errors,
}) => {
	return (
		<div className={className}>
			<h3 className='text-lg font-semibold mb-4'>Address</h3>
			<FormField
				label='Street'
				id='street'
				type='text'
				value={street}
				onChange={onStreetChange}
				name='street'
				rules={rules?.street}
				error={errors?.street}
				inputClassName={inputClassName}
			/>
			<FormField
				label='City'
				id='city'
				type='text'
				value={city}
				onChange={onCityChange}
				name='city'
				rules={rules?.city}
				error={errors?.city}
				inputClassName={inputClassName}
			/>
			<FormField
				label='State'
				id='state'
				options={[
					{ value: "", label: "Select a state" },
					{ value: "CA", label: "California" },
					{ value: "NY", label: "New York" },
					// Ajoutez d'autres options d'état ici
				]}
				value={state}
				onChange={onStateChange}
				name='state'
				rules={rules?.state}
				error={errors?.state}
				inputClassName={inputClassName}
			/>
			<FormField
				label='Zip Code'
				id='zipCode'
				type='text'
				value={zipCode}
				onChange={onZipCodeChange}
				name='zipCode'
				rules={rules?.zipCode}
				error={errors?.zipCode}
				inputClassName={inputClassName}
			/>
		</div>
	);
};

export default AddressFieldSet;
