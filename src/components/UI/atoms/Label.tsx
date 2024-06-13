import React, { LabelHTMLAttributes } from "react";

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
