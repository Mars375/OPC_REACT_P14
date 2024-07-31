import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import EmployeeTable from "@components/UI/organisms/EmployeeTable";
import { EmployeeProvider } from "@/provider/EmployeeProvider";
import { EmployeeFormData } from "@/types/employeeTypes";
import { userEvent } from "@testing-library/user-event";

const mockEmployees: EmployeeFormData[] = [
	{
		firstName: "John",
		lastName: "Doe",
		startDate: "2022-01-01",
		department: "HR",
		dateOfBirth: "1990-01-01",
		street: "123 Main St",
		city: "Anytown",
		state: "CA",
		zipCode: "12345",
	},
	{
		firstName: "Jane",
		lastName: "Smith",
		startDate: "2021-05-15",
		department: "Engineering",
		dateOfBirth: "1985-07-20",
		street: "456 Elm St",
		city: "Othertown",
		state: "NY",
		zipCode: "67890",
	},
];

describe("Given that I am a user on the Employee Table page", () => {
	beforeEach(() => {
		render(
			<EmployeeProvider>
				<EmployeeTable employees={mockEmployees} />
			</EmployeeProvider>
		);
	});

	afterEach(() => {
		cleanup();
	});

	describe("When the Employee Table is rendered", () => {
		it("Then it should display the column headers correctly", () => {
			const columnHeaders = [
				"First Name",
				"Last Name",
				"Start Date",
				"Department",
				"Date of Birth",
				"Street",
				"City",
				"State",
				"Zip Code",
			];

			columnHeaders.forEach((header) => {
				expect(screen.getByText(header)).toBeInTheDocument();
			});
		});

		it("Then it should display the employee data correctly", () => {
			mockEmployees.forEach((employee, index) => {
				expect(screen.getByTestId(`employee-row-${index}`)).toBeInTheDocument();
				expect(screen.getByText(employee.firstName)).toBeInTheDocument();
				expect(screen.getByText(employee.lastName)).toBeInTheDocument();
				expect(screen.getByText(employee.startDate)).toBeInTheDocument();
				expect(screen.getByText(employee.department)).toBeInTheDocument();
				expect(screen.getByText(employee.dateOfBirth)).toBeInTheDocument();
				expect(screen.getByText(employee.street)).toBeInTheDocument();
				expect(screen.getByText(employee.city)).toBeInTheDocument();
				expect(screen.getByText(employee.state)).toBeInTheDocument();
				expect(screen.getByText(employee.zipCode)).toBeInTheDocument();
			});
		});
	});

	describe("When the table is initially rendered", () => {
		it("Then it should sort the employee data by first name in ascending order by default", () => {
			const rows = screen.getAllByRole("row");
			expect(rows[1]).toHaveTextContent("Jane");
			expect(rows[2]).toHaveTextContent("John");
		});
	});

	describe("When a column header is clicked", () => {
		it("Then it should sort the employee data correctly by first name", async () => {
			const firstNameHeader = screen.getByText("First Name");
			await userEvent.click(firstNameHeader);

			const rows = screen.getAllByRole("row");
			expect(rows[1]).toHaveTextContent("John");
			expect(rows[2]).toHaveTextContent("Jane");

			await userEvent.click(firstNameHeader);

			expect(rows[1]).toHaveTextContent("Jane");
			expect(rows[2]).toHaveTextContent("John");
		});

		it("Then it should sort the employee data correctly by last name", async () => {
			const lastNameHeader = screen.getByText("Last Name");
			await userEvent.click(lastNameHeader);

			const rows = screen.getAllByRole("row");
			expect(rows[1]).toHaveTextContent("Doe");
			expect(rows[2]).toHaveTextContent("Smith");

			await userEvent.click(lastNameHeader);

			expect(rows[1]).toHaveTextContent("Smith");
			expect(rows[2]).toHaveTextContent("Doe");
		});
	});
});
