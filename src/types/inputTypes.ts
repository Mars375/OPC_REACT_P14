import { inputStyles } from "@/styles/inputStyles";
import { InputHTMLAttributes } from "react";

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	options?: { value: string; label: string }[];
	color?: keyof typeof inputStyles.color;
	size?: keyof typeof inputStyles.size;
	className?: string;
	placeholder?: string;
	fieldError?: string;
	id?: string;
}
