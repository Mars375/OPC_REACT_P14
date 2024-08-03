import EmployeeListTemplate from "@/components/templates/EmployeeListTemplate";
import GeneralTemplate from "@/components/templates/GeneralTemplate";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

/**
 * Employee List Page Component.
 *
 * This component serves as a page for displaying the list of employees. It utilizes the
 * Redux store to access and fetch the employee data. The data is then passed to the
 * `EmployeeListTemplate` for rendering, which is wrapped inside a `GeneralTemplate` to
 * maintain consistent styling across the application.
 *
 * @returns {JSX.Element} Renders the employee list page with header, footer, and the list of employees.
 *
 * @example
 * <EmployeeListPage />
 */
const EmployeeListPage = () => {
	const employees = useSelector(
		(state: RootState) => state.employees.employees
	);

	return (
		<GeneralTemplate>
			<EmployeeListTemplate employees={employees} />
		</GeneralTemplate>
	);
};

export default EmployeeListPage;
