import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeeListPage from "./pages/EmployeeListPage";
import ThemeProvider from "./provider/ThemeProvider";
import { EmployeeProvider } from "./provider/EmployeeProvider";
import { Toaster } from "opc-ui";

import "./globals.css";

/**
 * Main entry point for the HRnet application.
 *
 * Sets up the React application with global styles, routing, and context providers.
 * It uses React Router for navigation between different pages and wraps the entire application
 * in theme and employee context providers to manage state and theming consistently across the application.
 *
 * @module main
 */

// Configuration of the router with routes for each page
const router = createBrowserRouter([
	{
		path: "/", // Home page route
		element: <HomePage />,
	},
	{
		path: "/employees", // Employee list page route
		element: <EmployeeListPage />,
	},
	{
		path: "*", // Catch-all route for undefined paths
		element: <div>404 Not Found</div>, // Improved 404 message
	},
]);

// Render the application into the DOM
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<EmployeeProvider>
				<Toaster />
				<RouterProvider router={router} />
				navigation
			</EmployeeProvider>
		</ThemeProvider>
	</React.StrictMode>
);
