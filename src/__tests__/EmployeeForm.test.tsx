import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen, cleanup } from "@testing-library/react";
import { EmployeeProvider } from "@/provider/EmployeeProvider";
import EmployeeForm from "@components/UI/organisms/EmployeeForm";
import EmployeeContext from "@/context/EmployeeContext";

describe("Given that I am a user on the Employee Form page", () => {
	beforeEach(() => {
		render(
			<EmployeeProvider>
				<EmployeeForm />
			</EmployeeProvider>
		);
	});

	afterEach(() => {
		cleanup();
	});

	describe("When the Employee Form is rendered", () => {
		it("Then it should display all form fields correctly", () => {
			// Check the presence of the text fields
			expect(screen.getByTestId("first-name-input")).toBeInTheDocument();
			expect(screen.getByTestId("last-name-input")).toBeInTheDocument();
			expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
			expect(screen.getByLabelText("Start Date")).toBeInTheDocument();
			expect(screen.getByTestId("department-combobox")).toBeInTheDocument();
			expect(screen.getByTestId("street-input")).toBeInTheDocument();
			expect(screen.getByTestId("city-input")).toBeInTheDocument();
			expect(screen.getByTestId("zipCode-input")).toBeInTheDocument();
			expect(screen.getByTestId("state-combobox")).toBeInTheDocument();

			// Check the presence of the buttons
			expect(screen.getByTestId("submit-button")).toBeInTheDocument();
			expect(screen.getByTestId("clear-button")).toBeInTheDocument();
		});
	});

	describe("When the form is empty", () => {
		it("Then the submit button should be disabled", () => {
			expect(screen.getByTestId("submit-button")).toBeDisabled();
		});
	});

	describe("When the first name field is left empty and blurred", () => {
		it("Then it should display an error message", async () => {
			const firstNameInput = screen.getByTestId("first-name-input");
			await userEvent.click(firstNameInput);
			await userEvent.tab();
			expect(screen.getByText("First name is required")).toBeInTheDocument();
		});
	});

	describe("When the last name field is left empty and blurred", () => {
		it("Then it should display an error message", async () => {
			await userEvent.type(screen.getByTestId("first-name-input"), "John");
			await userEvent.click(screen.getByTestId("last-name-input"));
			await userEvent.tab(); // Simulate blurring the input field

			expect(screen.getByText("Last name is required")).toBeInTheDocument();
		});
	});

	describe("When the clear button is clicked", () => {
		it("Then it should reset all form fields", async () => {
			await userEvent.type(screen.getByTestId("first-name-input"), "John");
			await userEvent.type(screen.getByTestId("last-name-input"), "Doe");
			await userEvent.type(
				screen.getByLabelText("Date of Birth"),
				"01/01/1990"
			);
			await userEvent.type(screen.getByLabelText("Start Date"), "01/01/2022");

			// Interact with the department combobox
			await userEvent.click(screen.getByTestId("department"));
			await userEvent.click(screen.getByText("Sales"));

			await userEvent.type(screen.getByTestId("street-input"), "123 Main St");
			await userEvent.type(screen.getByTestId("city-input"), "Anytown");
			await userEvent.type(screen.getByTestId("zipCode-input"), "12345");

			// Interact with the state combobox
			await userEvent.click(screen.getByTestId("state"));
			await userEvent.click(screen.getByText("California"));

			await userEvent.click(screen.getByTestId("clear-button"));

			// Check that all fields are reset
			expect(screen.getByTestId("first-name-input")).toHaveValue("");
			expect(screen.getByTestId("last-name-input")).toHaveValue("");
			expect(screen.getByLabelText("Date of Birth")).toHaveValue("");
			expect(screen.getByLabelText("Start Date")).toHaveValue("");
			expect(screen.getByTestId("department")).toHaveValue("");
			expect(screen.getByTestId("street-input")).toHaveValue("");
			expect(screen.getByTestId("city-input")).toHaveValue("");
			expect(screen.getByTestId("zipCode-input")).toHaveValue("");
			expect(screen.getByTestId("state")).toHaveValue("");
		});
	});

	describe("When the form is submitted with all fields filled", () => {
		it("Then it should call the addEmployee function", async () => {
			cleanup(); // Clean up the previous render

			const mockAddEmployee = vi.fn();
			const spyConsoleLog = vi.spyOn(console, "log");

			render(
				<EmployeeContext.Provider
					value={{ employees: [], addEmployee: mockAddEmployee }}
				>
					<EmployeeForm />
				</EmployeeContext.Provider>
			);

			await userEvent.type(screen.getByTestId("first-name-input"), "John");
			await userEvent.type(screen.getByTestId("last-name-input"), "Doe");
			await userEvent.type(
				screen.getByLabelText("Date of Birth"),
				"01/01/1990"
			);
			await userEvent.type(screen.getByLabelText("Start Date"), "01/01/2022");

			// Interact with the department combobox
			await userEvent.click(screen.getByTestId("department"));
			await userEvent.click(screen.getByText("Sales"));

			await userEvent.type(screen.getByTestId("street-input"), "123 Main St");
			await userEvent.type(screen.getByTestId("city-input"), "Anytown");
			await userEvent.type(screen.getByTestId("zipCode-input"), "12345");

			// Interact with the state combobox
			await userEvent.click(screen.getByTestId("state"));
			await userEvent.click(screen.getByText("California"));

			await userEvent.click(screen.getByTestId("submit-button"));

			expect(mockAddEmployee).toHaveBeenCalledWith({
				firstName: "John",
				lastName: "Doe",
				dateOfBirth: "01/01/1990",
				startDate: "01/01/2022",
				street: "123 Main St",
				city: "Anytown",
				state: "CA",
				zipCode: "12345",
				department: "Sales",
			});

			expect(spyConsoleLog).toHaveBeenCalledWith("Employee Validated");
		});
	});

	describe("When the first name field is filled after being left empty", () => {
		it("Then the error message should disappear", async () => {
			await userEvent.click(screen.getByTestId("first-name-input"));
			await userEvent.tab(); // Simulate blurring the input field

			expect(screen.getByText("First name is required")).toBeInTheDocument();

			await userEvent.type(screen.getByTestId("first-name-input"), "John");

			expect(
				screen.queryByText("First name is required")
			).not.toBeInTheDocument();
		});
	});
});
