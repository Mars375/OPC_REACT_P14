import { inputStyles } from "@/styles/inputStyles";

export interface AddressFieldSetProps {
	className?: string;
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
		street?: { required: string; pattern: { value: RegExp; message: string } };
		city?: { required: string; pattern: { value: RegExp; message: string } };
		state?: { required: string };
		zipCode?: { required: string; pattern: { value: RegExp; message: string } };
	};
	errors?: {
		street?: string;
		city?: string;
		state?: string;
		zipCode?: string;
	};
	color?: keyof typeof inputStyles.color;
	size?: keyof typeof inputStyles.size;
}
