import React from "react";

/**
 * Displays a confirmation message with a styled background.
 * This component is typically used to show feedback to users after certain actions.
 *
 * @param {Object} props - Props for ConfirmationMessage
 * @param {string} props.message - The message text to be displayed.
 * @returns {React.ReactElement} A styled div element containing the message.
 */
interface ConfirmationMessageProps {
	message: string;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({
	message,
}) => (
	<div
		id='confirmation'
		className='mt-4 p-4 bg-success-background text-success rounded-md'
	>
		{message}
	</div>
);

export default ConfirmationMessage;
