export interface Rule {
	required?: boolean;
	message?: string;
}

export interface FormFieldProps {
	label: string;
	id: string;
	type?: "text" | "number" | "email" | "password" | "date";
	error?: string;
	options?: { value: string; label: string }[];
	className?: string;
	inputClassName?: string;
	value?: string;
	name?: string;
	rules?: Rule;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
}
