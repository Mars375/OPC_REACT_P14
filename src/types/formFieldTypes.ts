import { inputStyles } from "@/styles/inputStyles";

export interface Rule {
	required?: string;
	pattern?: {
		value: RegExp;
		message: string;
	};
}

export interface FormFieldProps {
	label: string;
	id: string;
	type?: "text" | "number" | "email" | "password" | "date";
	error?: string;
	options?: { value: string; label: string }[];
	className?: string;
	value?: string;
	name?: string;
	rules?: Rule;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	placeholder?: string;
	color?: keyof typeof inputStyles.color;
	size?: keyof typeof inputStyles.size;
}
