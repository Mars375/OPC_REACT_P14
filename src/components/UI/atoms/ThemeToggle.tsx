import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
		if (isDarkMode) {
			localStorage.removeItem("theme");
			document.documentElement.classList.remove("dark");
		} else {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		}
	};

	return (
		<button onClick={toggleTheme} className='bg-primary rounded-full p-2'>
			{isDarkMode ? "☀️" : "🌙"}
		</button>
	);
};

export default ThemeToggle;
