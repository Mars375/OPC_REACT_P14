import React, { SelectHTMLAttributes } from "react";

/**
 * Custom select component that can be styled with TailwindCSS.
 * It supports different colors and sizes, and can be used in various forms throughout the application.
 * This component is typically used for selecting one option from a list.
 *
 * @param {Object} props - Props for Select component
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

	return (
		<select
			{...rest}
			className={`${colorClass} ${sizeClass} w-full rounded-md ${className}`}
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
