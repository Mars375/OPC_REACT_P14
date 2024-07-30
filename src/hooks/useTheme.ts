import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Custom hook for accessing theme context.
 *
 * This hook simplifies the process of using the theme context within components.
 * It ensures that the theme context is used within a ThemeProvider to avoid errors.
 *
 * @returns The theme context object containing the current theme and a function to toggle the theme.
 * @throws Error if the hook is used outside of a ThemeProvider.
 */
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		// Ensures the hook is used within a ThemeProvider
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
