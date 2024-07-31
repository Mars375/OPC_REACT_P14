import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@vitest/browser/context";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "@/provider/ThemeProvider";
import Header from "@components/UI/organisms/Header";

describe("Header Component", () => {
	it("renders HRnet logo and navigation links", () => {
		render(
			<ThemeProvider>
				<Router>
					<Header />
				</Router>
			</ThemeProvider>
		);

		// Verify the logo is present
		const logo = screen.getByAltText("HRnet Logo");
		expect(logo).toBeInTheDocument();

		// Verify the navigation links are present
		const homeLink = screen.getByText("Home");
		expect(homeLink).toBeInTheDocument();
		const employeesLink = screen.getByText("Employees");
		expect(employeesLink).toBeInTheDocument();

		// Verify the theme toggle is present
		const themeToggle = screen.getByTestId("theme-toggle");
		expect(themeToggle).toBeInTheDocument();
	});

	it("navigates to the home page when the Home link is clicked", async () => {
		render(
			<ThemeProvider>
				<Router>
					<Header />
				</Router>
			</ThemeProvider>
		);

		// Check the presence of the Home link
		const homeLink = screen.getByText("Home");
		await userEvent.click(homeLink);

		// Check if the navigation to the home page is successful
		expect(window.location.pathname).toBe("/");
	});

	it("navigates to the employees page when the Employees link is clicked", async () => {
		render(
			<ThemeProvider>
				<Router>
					<Header />
				</Router>
			</ThemeProvider>
		);

		// Check the presence of the Employees link
		const employeesLink = screen.getByText("Employees");
		await userEvent.click(employeesLink);

		// Check if the navigation to the employees page is successful
		expect(window.location.pathname).toBe("/employees");
	});
});
