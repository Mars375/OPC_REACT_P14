import React from "react";
import ThemeToggle from "@atoms/ThemeToggle";

const Header: React.FC = () => {
	return (
		<header className='bg-primary dark:bg-primary-900 text-white dark:text-gray-200 p-4 flex justify-between items-center'>
			<h1 className='text-2xl font-bold'>HRnet</h1>
			<ThemeToggle />
		</header>
	);
};

export default Header;
