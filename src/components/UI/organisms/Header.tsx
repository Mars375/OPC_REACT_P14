import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../atoms/ThemeToggle";

const Header: React.FC = () => {
	return (
		<header className='px-4 flex justify-between items-center bg-light dark:bg-background-dark transition-[background-color] duration-300 ease-in-out'>
			<div className='flex space-x-12'>
				<Link to='/' className='flex items-center'>
					<img
						src='/HRLogo-removebg.png'
						alt='HRnet Logo'
						className='h-12 w-12'
					/>
					<h1 className='text-2xl font-bold text-primary-light dark:text-primary-dark'>
						HRnet
					</h1>
				</Link>
				<nav className='flex'>
					<Link
						to='/'
						className='text-[#0b57d0] dark:text-[#c2e7ffff] hover:bg-[#0b57d0]/20 dark:hover:bg-[#004a77ff]/30 flex items-center p-4'
					>
						Home
					</Link>
					<Link
						to='/employees'
						className='text-[#0b57d0] dark:text-[#c2e7ffff] hover:bg-[#0b57d0]/20 dark:hover:bg-[#004a77ff]/30 flex items-center p-4'
					>
						Employees
					</Link>
				</nav>
			</div>
			<ThemeToggle />
		</header>
	);
};

export default Header;
