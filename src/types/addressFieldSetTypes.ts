/**
 * AddressFieldSetProps defines the structure for properties used in the AddressFieldSet component.
 * This interface is used to type-check the props passed to the AddressFieldSet, ensuring that all necessary fields are included and correctly typed.
 *
 * @property {string} [className] - Optional CSS class for styling the container of the address field set.
 * @property {string} [inputClassName] - Optional CSS class for styling the individual input elements within the address field set.
 * @property {string} street - The street part of the address.
 * @property {string} city - The city part of the address.
 * @property {string} state - The state part of the address.
 * @property {string} zipCode - The ZIP code part of the address.
 * @property {Function} onStreetChange - Handler function for changes to the street input.
 * @property {Function} onCityChange - Handler function for changes to the city input.
 * @property {Function} onStateChange - Handler function for changes to the state input.
 * @property {Function} onZipCodeChange - Handler function for changes to the zip code input.
 * @property {Object} [rules] - Optional validation rules for the address inputs.
 * @property {Object} [errors] - Optional error messages for the address inputs.
 */
export interface AddressFieldSetProps {
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
