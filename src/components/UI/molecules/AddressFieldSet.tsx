import React from "react";
import FormField from "./FormField";
import { AddressFieldSetProps } from "@/types/addressFieldSetTypes";
import { states } from "@/utils/states";
import { fieldRules } from "@/config/fieldRules";

const AddressFieldSet: React.FC<AddressFieldSetProps> = ({
	className,
	street,
	city,
	state,
	zipCode,
	onStreetChange,
	onCityChange,
	onStateChange,
	onZipCodeChange,
	errors,
	color = "primary",
	size = "medium",
}) => {
	return (
		<div className={className}>
			<FormField
				label='Street'
				id='street'
				type='text'
				value={street}
				placeholder='123 Main St'
				onChange={onStreetChange}
				name='street'
				rules={fieldRules.street}
				error={errors?.street}
				color={color}
				size={size}
			/>
			<FormField
				label='City'
				id='city'
				type='text'
				value={city}
				placeholder='Anytown'
				onChange={onCityChange}
				name='city'
				rules={fieldRules.city}
				error={errors?.city}
				color={color}
				size={size}
			/>
			<FormField
				label='State'
				id='state'
				options={[...states]}
				value={state}
				onChange={onStateChange}
				name='state'
				placeholder='Select a state'
				rules={fieldRules.state}
				error={errors?.state}
				color={color}
				size={size}
			/>
			<FormField
				label='Zip Code'
				id='zipCode'
				type='text'
				value={zipCode}
				placeholder='12345'
				onChange={onZipCodeChange}
				name='zipCode'
				rules={fieldRules.zipCode}
				error={errors?.zipCode}
				color={color}
				size={size}
			/>
		</div>
	);
};

export default AddressFieldSet;
