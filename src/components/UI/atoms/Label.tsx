import React, { LabelHTMLAttributes } from "react";

/**
 * Label component that can be reused throughout the application.
 *
 * This component is designed to be flexible and can be styled externally via `className`.
 * It extends standard HTML label attributes for enhanced accessibility and functionality.
 *
 * @param {LabelProps} props - The properties passed to the label component.
 */
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, className, ...rest }) => {
	// Apply default and additional classes for styling
	const baseClass = "block mb-1";
	return (
		<label {...rest} className={`${baseClass} ${className}`}>
			{children}
		</label>
	);
};

export default Label;
