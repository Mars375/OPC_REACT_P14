import React from "react";
import FormField from "./FormField";

interface AddressFieldSetProps {
	className?: string;
	inputClassName?: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	onStreetChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	onCityChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	onStateChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	onZipCodeChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}

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
}) => {
	return (
		<fieldset className={`border rounded-md p-4 ${className}`}>
			<legend className='text-gray-700 dark:text-text-dark font-bold mb-2'>
				Address
			</legend>

			<FormField
				label='Street'
				id='street'
				type='text'
				value={street}
				onChange={onStreetChange}
				className='mb-2'
				inputClassName={inputClassName}
			/>

			<FormField
				label='City'
				id='city'
				type='text'
				value={city}
				onChange={onCityChange}
				className='mb-2'
				inputClassName={inputClassName}
			/>

			<FormField
				label='State'
				id='state'
				options={[
					{ value: "", label: "Select a state" },
					{ value: "CA", label: "California" },
					{ value: "NY", label: "New York" },
					// ... autres états
				]}
				value={state}
				onChange={onStateChange}
				className='mb-2'
				inputClassName={inputClassName}
			/>

			<FormField
				label='Zip Code'
				id='zipCode'
				type='number'
				value={zipCode}
				onChange={onZipCodeChange}
				inputClassName={inputClassName}
			/>
		</fieldset>
	);
};

export default AddressFieldSet;
