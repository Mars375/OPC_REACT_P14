export interface Rule {
	required?: boolean;
	message?: string;
}

export interface FormFieldProps {
	label: string;
	id: string;
	type?: string; // 'text', 'number', 'email', etc.
	error?: string;
	options?: { value: string; label: string }[]; // Pour le Select
	className?: string;
	inputClassName?: string; // Pour personnaliser l'input/select
	value?: string;
	name?: string;
	rules?: Rule; // Ajout de la prop rules
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void; // Ajout de la prop onChange
}
