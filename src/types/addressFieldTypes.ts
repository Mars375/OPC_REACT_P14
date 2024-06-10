export interface AddressFieldProps {
	label: string;
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	rules?: { required: boolean; message: string };
	error?: string;
	options?: { value: string; label: string }[];
}
