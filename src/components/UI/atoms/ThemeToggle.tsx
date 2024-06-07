import React from "react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='relative text-white dark:text-gray-200 rounded-full p-2'
		>
			<span
				className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out ${
					theme === "dark" ? "rotate-180" : "rotate-0"
				} ${theme === "dark" ? "opacity-0 delay-300" : "opacity-100"}`}
			>
				🌙
			</span>
			<span
				className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out ${
					theme === "dark" ? "rotate-0" : "rotate-180"
				} ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
			>
				☀️
			</span>
		</button>
	);
};

export default ThemeToggle;
