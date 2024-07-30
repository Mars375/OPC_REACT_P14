import EmployeeListTemplate from "@/components/templates/EmployeeListTemplate";
import GeneralTemplate from "@/components/templates/GeneralTemplate";
import EmployeeContext from "@/context/EmployeeContext";
import { useContext } from "react";

/**
 * Employee List Page Component.
 *
 * This component serves as a page for displaying the list of employees. It utilizes the
 * `EmployeeContext` to access and fetch the employee data. The data is then passed to the
 * `EmployeeListTemplate` for rendering, which is wrapped inside a `GeneralTemplate` to
 * maintain consistent styling across the application.
 *
 * Uses the `useContext` hook from React to subscribe to `EmployeeContext` and access the
 * employee data.
 *
 * @returns {JSX.Element} Renders the employee list page with header, footer, and the list of employees.
 *
 * @example
 * <EmployeeListPage />
 */
const EmployeeListPage = () => {
	const context = useContext(EmployeeContext);
	const employees = context?.employees ?? [];

	return (
		<GeneralTemplate>
			<EmployeeListTemplate employees={employees} />
		</GeneralTemplate>
	);
};

export default EmployeeListPage;
