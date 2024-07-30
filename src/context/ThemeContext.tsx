import { createContext } from "react";

/**
 * Interface for the properties of the ThemeContext.
 * Defines the structure of the theme context data.
 * @interface
 * @property {string} theme - Current theme name.
 * @property {() => void} toggleTheme - Function to toggle the theme.
 */
interface ThemeContextType {
	theme: string; // Name of the current theme
	toggleTheme: () => void; // Function to switch themes
}

/**
 * Creates a context for managing theme data across the application.
 *
 * This context provides components with access to the current theme and a method to toggle the theme.
 * It is intended to be used with a provider that supplies the actual data and implementation of the toggleTheme method.
 *
 * @returns {Context<ThemeContextType | undefined>} The Theme context with initial state as undefined.
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined // Set to undefined to indicate that there is no default value
);
