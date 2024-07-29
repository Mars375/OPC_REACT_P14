import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, className, ...rest }) => {
	return (
		<label {...rest} className={`block mb-1 ${className}`}>
			{children}
		</label>
	);
};

export default Label;
