import React from "react";
import AddressInput from "../atoms/AddressInput";
import StateSelect from "./StateSelect";
import { AddressFieldSetProps } from "@/types/addressFieldSetTypes";

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
	rules,
	errors,
	stateOptions,
}) => {
	return (
		<div className={className}>
			<h3 className='text-lg font-semibold mb-4'>Address</h3>
			<AddressInput
				label='Street'
				id='street'
				value={street}
				onChange={onStreetChange}
				rules={rules?.street}
				error={errors?.street}
			/>
			<AddressInput
				label='City'
				id='city'
				value={city}
				onChange={onCityChange}
				rules={rules?.city}
				error={errors?.city}
			/>
			<StateSelect
				label='State'
				id='state'
				value={state}
				onChange={onStateChange}
				options={stateOptions}
			/>
			<AddressInput
				label='Zip Code'
				id='zipCode'
				value={zipCode}
				onChange={onZipCodeChange}
				rules={rules?.zipCode}
				error={errors?.zipCode}
			/>
		</div>
	);
};
export default AddressFieldSet;
