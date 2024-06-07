import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className='flex items-center'>
			<button
				onClick={toggleTheme}
				className={`relative inline-flex items-center h-8 w-16 rounded-full p-1 transition-colors duration-300 ease-in-out ${
					theme === "dark" ? "bg-blue-600" : "bg-gray-300"
				}`}
			>
				<span
					className={`absolute inset-y-0 left-0 flex items-center justify-center w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
						theme === "dark" ? "translate-x-8" : "translate-x-0"
					}`}
				>
					<FontAwesomeIcon
						icon={theme === "dark" ? faMoon : faSun}
						className={`text-yellow-500 transition-transform duration-300 ease-in-out ${
							theme === "dark" ? "rotate-180" : "rotate-0"
						}`}
					/>
				</span>
			</button>
		</div>
	);
};

export default ThemeToggle;
