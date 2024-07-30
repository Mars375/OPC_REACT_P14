import React from "react";

/**
 * Footer component that displays copyright information.
 *
 * This component is styled to be at the bottom of the page and centered. It uses Tailwind CSS for styling.
 */
const Footer: React.FC = React.memo(() => {
	return (
		<footer className='bg-secondary text-center p-4 flex justify-center items-center transition-[background-color] duration-300 ease-in-out'>
			{/* Copyright text with dynamic year and company name */}
			<p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
		</footer>
	);
});

export default Footer;
