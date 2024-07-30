import React from "react";
import GeneralTemplate from "@/components/templates/GeneralTemplate";
import CreateEmployeeTemplate from "@/components/templates/CreateEmployeeTemplate";

/**
 * Home Page Component.
 *
 * This component serves as the landing page for the application. It wraps the `CreateEmployeeTemplate`
 * within a `GeneralTemplate` to ensure consistent styling and structure across the site.
 *
 * The `CreateEmployeeTemplate` is used here to provide a form for creating new employees directly
 * from the home page.
 *
 * @returns {JSX.Element} The Home page component which includes the employee creation form.
 *
 * @example
 * <HomePage />
 */
const HomePage: React.FC = () => {
	return (
		<GeneralTemplate>
			<CreateEmployeeTemplate />
		</GeneralTemplate>
	);
};

export default HomePage;
