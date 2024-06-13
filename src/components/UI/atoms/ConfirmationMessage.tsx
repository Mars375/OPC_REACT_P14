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
		id='confirmation'
		className={`mt-4 p-4 rounded-md ${
			message.type === "success"
				? "bg-success-background text-success"
				: message.type === "error"
				? "bg-error-background text-error"
				: "bg-info-background text-info"
		}`}
	>
		{message.text}
	</div>
);

export default ConfirmationMessage;
