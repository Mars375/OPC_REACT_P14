import { InputHTMLAttributes } from "react";

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	size?: "small" | "medium" | "large";
	className?: string;
	placeholder?: string;
	fieldError?: string;
	id?: string;
}
