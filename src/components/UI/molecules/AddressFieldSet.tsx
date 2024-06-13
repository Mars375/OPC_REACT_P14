import React from "react";
import FormField from "./FormField";
import { AddressFieldSetProps } from "@/types/addressFieldSetTypes";
import { states } from "@/utils/states";

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
				options={[{ value: "", label: "Select a state" }, ...states]}
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
