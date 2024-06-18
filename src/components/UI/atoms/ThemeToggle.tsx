import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle: React.FC = React.memo(() => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className='flex items-center'>
			<button
				onClick={toggleTheme}
				className={`relative inline-flex items-center h-8 w-16 rounded-full p-1 transition-colors duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none ${
					theme === "dark" ? "bg-background-dark-2" : "bg-dark/5"
				}`}
			>
				<span
					className={`absolute inset-y-1 left-0 flex items-center justify-center w-6 h-6 transform bg-light dark:bg-background-dark rounded-full shadow-md transition-transform duration-300 ease-in-out ${
						theme === "dark" ? "translate-x-9" : "translate-x-1"
					}`}
				>
					<FontAwesomeIcon
						icon={theme === "dark" ? faMoon : faSun}
						className={`text-yellow-500 transition-transform duration-300 ease-in-out ${
							theme === "dark" ? "rotate-360" : "-rotate-180"
						}`}
					/>
				</span>
			</button>
		</div>
	);
});

export default ThemeToggle;
