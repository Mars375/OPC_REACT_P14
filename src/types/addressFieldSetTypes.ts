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
