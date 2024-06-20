import EmployeeListTemplate from "@/components/templates/EmployeeListTemplate";
import GeneralTemplate from "@/components/templates/GeneralTemplate";

// TODO: Créer les atomes
// - TableHeader
// - TableRow
// - TableCell
// - Button
// - Input
// - Select

// TODO: Créer les molécules
// - Table
// - SearchBar
// - Pagination

// TODO: Créer les organismes
// - EmployeeTable

// TODO: Utiliser les composants créés dans la page EmployeeListPage

const EmployeeListPage = () => {
	return (
		<GeneralTemplate>
			<EmployeeListTemplate />
		</GeneralTemplate>
	);
};

export default EmployeeListPage;
