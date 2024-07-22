import React from "react";

const Footer: React.FC = React.memo(() => {
	return (
		<footer className='bg-secondary text-center p-4 flex justify-center items-center transition-[background-color] duration-300 ease-in-out'>
			<p>© 2023 Company Name. All rights reserved.</p>
		</footer>
	);
});

export default Footer;
