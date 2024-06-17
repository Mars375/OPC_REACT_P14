import React from "react";

interface ConfirmationMessageProps {
	message: {
		text: string;
		type: "success" | "error" | "info";
	};
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({
	message,
}) => (
	<div
		className={`p-4 mb-4 text-sm text-${
			message.type === "success" ? "green" : "red"
		}-700 bg-${message.type === "success" ? "green" : "red"}-100 rounded-lg`}
		role='alert'
	>
		<span className='font-medium'>{message.text}</span>
	</div>
);

export default ConfirmationMessage;
