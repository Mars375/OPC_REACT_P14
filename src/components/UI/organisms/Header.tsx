import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../atoms/ThemeToggle";

const Header: React.FC = () => {
	return (
		<header className='p-4 flex justify-between items-center bg-light dark:bg-background-dark transition-[background-color] duration-300 ease-in-out'>
			<div className='flex items-center space-x-4'>
				<Link to='/'>
					<img
						src='/HRLogo-removebg.png'
						alt='HRnet Logo'
						className='h-12 w-12'
					/>
				</Link>
				<h1 className='text-2xl font-bold text-primary-light dark:text-primary-dark'>
					HRnet
				</h1>
				<nav>
					<Link
						to='/employee-list'
						className='hover:underline text-interactive-light dark:text-interactive-dark'
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
