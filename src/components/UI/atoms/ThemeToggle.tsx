import React from "react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className='flex items-center'>
			<span className='mr-2 text-gray-900 dark:text-gray-100'>Light</span>
			<button
				onClick={toggleTheme}
				className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out ${
					theme === "dark" ? "bg-yellow-500" : "bg-gray-300"
				}`}
			>
				<span
					className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out ${
						theme === "dark" ? "translate-x-6" : "translate-x-1"
					}`}
				/>
			</button>
			<span className='ml-2 text-gray-900 dark:text-gray-100'>Dark</span>
		</div>
	);
};

export default ThemeToggle;
