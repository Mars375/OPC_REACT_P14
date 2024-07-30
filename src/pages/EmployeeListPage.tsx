import EmployeeListTemplate from "@/components/templates/EmployeeListTemplate";
import GeneralTemplate from "@/components/templates/GeneralTemplate";
import EmployeeContext from "@/context/EmployeeContext";
import { useContext } from "react";

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
