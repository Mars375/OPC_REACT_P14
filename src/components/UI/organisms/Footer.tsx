import React from "react";

/**
 * Footer component that displays copyright and other company information.
 * It is typically used at the bottom of the application layout.
 *
 * @returns {React.ReactElement} A footer element with copyright text.
 */
const Footer: React.FC = React.memo(() => {
	return (
		<footer className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-center p-4 flex justify-center items-center border-t border-gray-200 dark:border-gray-700'>
			<p className='text-gray-700 dark:text-gray-300'>
				© 2023 Company Name. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
