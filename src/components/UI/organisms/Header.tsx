import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../atoms/ThemeToggle";

const Header: React.FC = () => {
	return (
		<header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 flex justify-between items-center shadow-md'>
			<div className='flex items-center space-x-4'>
				<Link to='/'>
					<img
						src='/HRLogo-removebg.png'
						alt='HRnet Logo'
						className='h-12 w-12'
					/>
				</Link>
				<h1 className='text-2xl font-bold'>HRnet</h1>
				<nav>
					<Link
						to='/employee-list'
						className='text-blue-500 dark:text-yellow-500 hover:underline'
					>
						View Current Employees
					</Link>
				</nav>
			</div>
			<ThemeToggle />
		</header>
	);
};

export default Header;
