import React from "react";

/**
 * Displays a confirmation message with a styled background.
 * This component is typically used to show feedback to users after certain actions, such as successful form submission or data processing.
 *
 * @param {Object} props - Props for ConfirmationMessage
 * @param {string} props.message - The message text to be displayed.
 * @returns {React.ReactElement} A styled div element containing the message.
 */
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
