import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import EmployeeTable from "@components/UI/organisms/EmployeeTable";
import { EmployeeFormData } from "@/types/employeeTypes";
import { userEvent } from "@vitest/browser/context";
import { Provider } from "react-redux";
import store from "../redux/store";

// List of first names and last names to generate mock employees
const firstNames = [
	"Alice",
	"Bob",
	"Charlie",
	"David",
	"Eve",
	"Faythe",
	"Grace",
	"Heidi",
	"Ivan",
	"Judy",
];
const lastNames = [
	"Smith",
	"Johnson",
	"Williams",
	"Brown",
	"Jones",
	"Garcia",
	"Miller",
	"Davis",
	"Rodriguez",
	"Martinez",
];

// Function to get a random first name
const getRandomFirstName = () =>
	firstNames[Math.floor(Math.random() * firstNames.length)];
// Function to get a random last name
const getRandomLastName = () =>
	lastNames[Math.floor(Math.random() * lastNames.length)];

// Generate mock employees for testing
const generateMockEmployees = (num: number): EmployeeFormData[] => {
	const employees: EmployeeFormData[] = [];
	for (let i = 0; i < num; i++) {
		employees.push({
			firstName: getRandomFirstName(),
			lastName: getRandomLastName(),
			startDate: `2022-01-${String(i + 1).padStart(2, "0")}`,
			department: `Department${i % 5}`,
			dateOfBirth: `1990-01-${String(i + 1).padStart(2, "0")}`,
			street: `${i} Main St`,
			city: `City${i}`,
			state: `State${i % 50}`,
			zipCode: `${String(10000 + i).padStart(5, "0")}`,
		});
	}
	return employees.sort((a, b) => a.firstName.localeCompare(b.firstName));
};

const mockEmployees = generateMockEmployees(50);

describe("Given that I am a user on the Employee Table page", () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<EmployeeTable employees={mockEmployees} />
			</Provider>
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

		it("Then it should display the employee data correctly on the first page", () => {
			// Check the data of the employees on the first page
			for (let i = 0; i < 10; i++) {
				const employee = mockEmployees[i];
				const row = screen.getByTestId(`employee-row-${i}`);
				expect(row).toBeInTheDocument();
				expect(screen.getByTestId(`cell-firstName-${i}`)).toHaveTextContent(
					employee.firstName
				);
				expect(screen.getByTestId(`cell-lastName-${i}`)).toHaveTextContent(
					employee.lastName
				);
				expect(screen.getByTestId(`cell-startDate-${i}`)).toHaveTextContent(
					employee.startDate
				);
				expect(screen.getByTestId(`cell-department-${i}`)).toHaveTextContent(
					employee.department
				);
				expect(screen.getByTestId(`cell-dateOfBirth-${i}`)).toHaveTextContent(
					employee.dateOfBirth
				);
				expect(screen.getByTestId(`cell-street-${i}`)).toHaveTextContent(
					employee.street
				);
				expect(screen.getByTestId(`cell-city-${i}`)).toHaveTextContent(
					employee.city
				);
				expect(screen.getByTestId(`cell-state-${i}`)).toHaveTextContent(
					employee.state
				);
				expect(screen.getByTestId(`cell-zipCode-${i}`)).toHaveTextContent(
					employee.zipCode
				);
			}
		});
	});

	describe("When the table is initially rendered", () => {
		it("Then it should sort the employee data by first name in ascending order by default", () => {
			const rows = screen.getAllByRole("row");
			expect(rows[1]).toHaveTextContent(mockEmployees[0].firstName);
			expect(rows[2]).toHaveTextContent(mockEmployees[1].firstName);
		});
	});

	describe("When the search input is used", () => {
		it("Then it should filter the employee data correctly", async () => {
			const searchInput = screen.getByPlaceholderText("Search...");
			await userEvent.type(searchInput, "Alice");
			expect(screen.getByTestId("cell-firstName-0")).toHaveTextContent("Alice");
		});
	});

	describe("When a column header is clicked", () => {
		it("Then it should sort the employee data correctly by first name", async () => {
			const firstNameHeader = screen.getByText("First Name");
			await userEvent.click(firstNameHeader);

			// Sort the employees in descending order by first name
			const sortedEmployeesDesc = [...mockEmployees].sort((a, b) =>
				b.firstName.localeCompare(a.firstName)
			);

			// Check if the employees are displayed in descending order by first name
			const rows = screen.getAllByTestId(/^employee-row-/);
			for (let i = 0; i < rows.length; i++) {
				expect(rows[i]).toHaveTextContent(sortedEmployeesDesc[i].firstName);
			}

			await userEvent.click(firstNameHeader);

			// Sort the employees in ascending order by first name
			const sortedEmployeesAsc = [...mockEmployees].sort((a, b) =>
				a.firstName.localeCompare(b.firstName)
			);

			// Check if the employees are displayed in ascending order by first name
			for (let i = 0; i < rows.length; i++) {
				expect(rows[i]).toHaveTextContent(sortedEmployeesAsc[i].firstName);
			}
		});
	});
});
