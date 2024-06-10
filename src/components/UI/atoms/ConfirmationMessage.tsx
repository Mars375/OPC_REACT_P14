import React from "react";

interface ConfirmationMessageProps {
	message: string;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({
	message,
}) => (
	<div
		id='confirmation'
		className='mt-4 p-4 bg-success-light text-success rounded-md'
	>
		{message}
	</div>
);

export default ConfirmationMessage;
