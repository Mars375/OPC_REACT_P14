import React, { LabelHTMLAttributes } from "react";

/**
 * Custom label component that can be styled with TailwindCSS.
 * It is used to provide accessible labels for interactive form elements.
 *
 * @param {LabelProps} props - Props for Label component
 * @param {string} props.text - The text content of the label.
 * @param {string} [props.className] - Additional CSS classes for further customization.
 * @returns {React.ReactElement} A styled label element.
 */
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	text: string;
}

const Label: React.FC<LabelProps> = ({ text, className, ...rest }) => {
	return (
		<label
			{...rest}
			className={`block mb-1 text-gray-700 dark:text-gray-300 ${className}`}
		>
			{text}
		</label>
	);
};

export default Label;
