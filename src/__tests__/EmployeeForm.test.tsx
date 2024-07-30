import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeeForm from "@components/UI/organisms/EmployeeForm";
import { EmployeeProvider } from "@/provider/EmployeeProvider";

describe("EmployeeForm", () => {
	let firstNameInput: HTMLInputElement,
		lastNameInput: HTMLInputElement,
		dateOfBirthInput: HTMLInputElement,
		startDateInput: HTMLInputElement,
		departmentCombobox: HTMLInputElement;

	let streetInput: HTMLInputElement,
		cityInput: HTMLInputElement,
		zipCodeInput: HTMLInputElement,
		stateCombobox: HTMLInputElement,
		submitButton: HTMLButtonElement,
		clearButton: HTMLButtonElement;

	beforeEach(() => {
		render(
			<EmployeeProvider>
				<EmployeeForm />
			</EmployeeProvider>
		);

		firstNameInput = screen.getByTestId("first-name-input");
		lastNameInput = screen.getByTestId("last-name-input");
		dateOfBirthInput = screen.getByLabelText("Date of Birth");
		startDateInput = screen.getByLabelText("Start Date");
		departmentCombobox = screen.getByTestId("department-combobox");
		streetInput = screen.getByTestId("street-input");
		cityInput = screen.getByTestId("city-input");
		zipCodeInput = screen.getByTestId("zipCode-input");
		stateCombobox = screen.getByTestId("state-combobox");
		submitButton = screen.getByTestId("submit-button");
		clearButton = screen.getByTestId("clear-button");
	});

	it("renders all form fields", () => {
		expect(firstNameInput).toBeInTheDocument();
		expect(lastNameInput).toBeInTheDocument();
		expect(dateOfBirthInput).toBeInTheDocument();
		expect(startDateInput).toBeInTheDocument();
		expect(departmentCombobox).toBeInTheDocument();
		expect(streetInput).toBeInTheDocument();
		expect(cityInput).toBeInTheDocument();
		expect(zipCodeInput).toBeInTheDocument();
		expect(stateCombobox).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
		expect(clearButton).toBeInTheDocument();
	});

	it("validates name field as required", async () => {
		fireEvent.blur(firstNameInput);
		await waitFor(() => {
			expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
		});
	});

	it("allows form submission when all fields are valid", async () => {
		const consoleSpy = vi.spyOn(console, "log");

		await userEvent.type(firstNameInput, "John");
		await userEvent.type(lastNameInput, "Doe");
		await userEvent.type(dateOfBirthInput, "01/01/2000");
		await userEvent.type(startDateInput, "01/01/2025");

		await userEvent.type(streetInput, "123 Main St");
		await userEvent.type(cityInput, "Anytown");
		await userEvent.type(zipCodeInput, "12345");

		const stateButton = screen.getByTestId("state");
		await userEvent.click(stateButton);
		const stateOption = await screen.findByRole("option", { name: "Alaska" });
		await userEvent.click(stateOption);

		const departmentButton = screen.getByTestId("department");
		await userEvent.click(departmentButton);
		const departmentOption = await screen.findByRole("option", {
			name: "Marketing",
		});
		await userEvent.click(departmentOption);

		await userEvent.click(submitButton);

		expect(consoleSpy).toHaveBeenCalledWith("Employee Validated");
	});

	it("shows error message on form submission failure", async () => {
		const consoleSpy = vi.spyOn(console, "log");

		await userEvent.type(firstNameInput, "John");
		await userEvent.type(lastNameInput, "Doe");
		await userEvent.type(dateOfBirthInput, "01/01/2027");
		await userEvent.type(startDateInput, "01/01/2025");

		await userEvent.type(streetInput, "123 Main St");
		await userEvent.type(cityInput, "Anytown");
		await userEvent.type(zipCodeInput, "12345");

		const stateButton = screen.getByTestId("state");
		await userEvent.click(stateButton);
		const stateOption = await screen.findByRole("option", { name: "Utah" });
		await userEvent.click(stateOption);

		const departmentButton = screen.getByTestId("department");
		await userEvent.click(departmentButton);
		const departmentOption = await screen.findByRole("option", {
			name: "Marketing",
		});
		await userEvent.click(departmentOption);

		await userEvent.click(submitButton);

		expect(consoleSpy).toHaveBeenCalledWith(
			"Error: Please fill in all fields correctly."
		);
	});

	it("clears all fields when clear button is clicked", async () => {
		await userEvent.type(firstNameInput, "Clear");
		await userEvent.type(lastNameInput, "Test");
		await userEvent.click(clearButton);

		await waitFor(() => {
			expect(firstNameInput).toHaveValue("");
			expect(lastNameInput).toHaveValue("");
		});
	});
});
