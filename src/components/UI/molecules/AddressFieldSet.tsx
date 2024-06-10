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
	rules?: {
		street?: { required: boolean; message: string };
		city?: { required: boolean; message: string };
		state?: { required: boolean; message: string };
		zipCode?: { required: boolean; message: string };
	};
	errors?: {
		street?: string;
		city?: string;
		state?: string;
		zipCode?: string;
	};
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
