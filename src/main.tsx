import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeeListPage from "./pages/EmployeeListPage";
import ThemeProvider from "./provider/ThemeProvider";
import { EmployeeProvider } from "./provider/EmployeeProvider";
import { Toaster } from "opc-ui";

import "./globals.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/employees",
		element: <EmployeeListPage />,
	},
	{
		path: "*",
		element: <div>404</div>,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<EmployeeProvider>
				<Toaster />
				<RouterProvider router={router} />
			</EmployeeProvider>
		</ThemeProvider>
	</React.StrictMode>
);
