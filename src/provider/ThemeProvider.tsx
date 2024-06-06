import React, { useState, ReactNode, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState("light"); // 'light' ou 'dark'

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.add(savedTheme);
		}
	}, []);

	const toggleTheme = () => {
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
