import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/index";

/**
 * Header component that provides navigation links and theme toggling.
 *
 * This component includes links to the Home and Employees pages and a theme toggle switch.
 * It uses Tailwind CSS for styling to ensure consistent and responsive design.
 */
const Header: React.FC = () => {
	return (
		<header className='px-4 flex justify-between items-center bg-background transition-[background-color] duration-300 ease-in-out'>
			{/* Logo and main navigation links */}
			<div className='flex space-x-12'>
				<Link to='/' className='flex items-center'>
					<img
						src='/HRLogo-removebg.png'
						alt='HRnet Logo'
						className='h-12 w-12'
					/>
					<h1 className='text-2xl font-bold'>HRnet</h1>
				</Link>
				<nav className='flex'>
					{/* Navigation link to the home page */}
					<Link
						to='/'
						className='text-[#0b57d0] dark:text-[#c2e7ffff] hover:bg-[#0b57d0]/20 dark:hover:bg-[#004a77ff]/30 flex items-center p-4'
					>
						Home
					</Link>
					{/* Navigation link to the employees page */}
					<Link
						to='/employees'
						className='text-[#0b57d0] dark:text-[#c2e7ffff] hover:bg-[#0b57d0]/20 dark:hover:bg-[#004a77ff]/30 flex items-center p-4'
					>
						Employees
					</Link>
				</nav>
			</div>
			{/* Theme toggle switch */}
			<ThemeToggle />
		</header>
	);
};

export default Header;
