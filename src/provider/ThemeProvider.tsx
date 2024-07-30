import React, { useState, ReactNode, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface ThemeProviderProps {
	children: ReactNode;
}

/**
 * Provides the theme context to child components.
 *
 * This provider component manages the theme settings using React's Context API. It handles
 * loading the theme from localStorage on initialization and provides a method to toggle the theme.
 *
 * @param {ThemeProviderProps} props - The props containing children to render within the theme context.
 * @returns {JSX.Element} A context provider wrapping children with theme data and actions.
 */
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		// Load theme from localStorage and apply it to the document
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.add(savedTheme);
		}
	}, []);

	const toggleTheme = () => {
		// Toggle between 'light' and 'dark' themes
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
