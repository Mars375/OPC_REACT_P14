import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

/**
 * ThemeToggle component allows users to switch between light and dark themes.
 * It uses FontAwesome icons to represent the sun (light theme) and moon (dark theme).
 * This component is typically used in the header or settings menu of the application.
 * Smooth transitions are applied to enhance the user interaction experience.
 *
 * @returns {React.ReactElement} A button that toggles the theme, with visual feedback for the current state.
 */
const ThemeToggle: React.FC = React.memo(() => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className='flex items-center'>
			<button
				onClick={toggleTheme}
				className={`relative inline-flex items-center h-8 w-16 rounded-full p-1 transition-colors duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
					theme === "dark" ? "bg-gray-800" : "bg-gray-300"
				}`}
			>
				<span
					className={`absolute inset-y-1 left-0 flex items-center justify-center w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
						theme === "dark" ? "translate-x-9" : "translate-x-1"
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
});

export default ThemeToggle;
