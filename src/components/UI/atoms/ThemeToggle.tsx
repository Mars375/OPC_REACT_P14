import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

/**
 * ThemeToggle component that allows users to switch between light and dark themes.
 *
 * This component uses the `useTheme` hook to read and set the current theme.
 * It visually represents the current theme with a toggle switch that moves horizontally and changes icons.
 */
const ThemeToggle: React.FC = React.memo(() => {
	const { theme, toggleTheme } = useTheme();

	// Function to handle keyboard events
	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === "Enter" || event.key === " ") {
			toggleTheme();
		}
	};

	return (
		<div className='flex items-center'>
			<button
				onClick={toggleTheme}
				onKeyDown={handleKeyPress} // Handle keyboard events
				className={`relative inline-flex items-center h-8 w-16 rounded-full p-1 transition-colors duration-300 ease-in-out hover:bg-opacity-75 focus:outline-none bg-accent`}
				data-testid='theme-toggle'
				aria-label='Toggle theme' // ARIA label for accessibility
				aria-checked={theme === "dark"} // ARIA state for accessibility
				role='switch' // ARIA role for accessibility
			>
				<span
					className={`absolute inset-y-1 left-0 flex items-center justify-center w-6 h-6 transform rounded-full shadow-md transition-transform duration-300 ease-in-out ${
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
