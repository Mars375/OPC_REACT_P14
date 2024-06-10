import React, { SelectHTMLAttributes } from "react";

/**
 * Custom select component that can be styled with TailwindCSS.
 * It supports different colors and sizes, and can be used in various forms throughout the application.
 * This component is typically used for selecting one option from a list.
 * Transitions are applied for smoother visual effects on focus and hover.
 *
 * @param {SelectProps} props - Props for Select component
 * @param {Array<{value: string; label: string}>} props.options - Options for the select dropdown.
 * @param {'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'} [props.color='primary'] - Color variant of the select.
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - Size of the select.
 * @param {string} [props.className] - Additional CSS classes for further customization.
 * @returns {React.ReactElement} A styled select element.
 */
interface SelectProps
	extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	options: { value: string; label: string }[];
	color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
	size?: "small" | "medium" | "large";
	className?: string;
}

const Select: React.FC<SelectProps> = ({
	options,
	color = "primary",
	size = "medium",
	className,
	...rest
}) => {
	const colorClass = `bg-${color}-500 text-white`;
	const sizeClass =
		size === "large" ? "p-4" : size === "medium" ? "p-3" : "p-2";
	const transitionClass = "transition ease-in-out duration-300";

	return (
		<select
			{...rest}
			className={`${colorClass} ${sizeClass} ${transitionClass} w-full rounded-md ${className} focus:ring-2 focus:ring-${color}-300`}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;
