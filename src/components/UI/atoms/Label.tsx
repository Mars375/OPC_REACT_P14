import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	text: string;
}

const Label: React.FC<LabelProps> = ({ text, className, ...rest }) => {
	return (
		<label {...rest} className={`block mb-1 ${className}`}>
			{text}
		</label>
	);
};

export default Label;
