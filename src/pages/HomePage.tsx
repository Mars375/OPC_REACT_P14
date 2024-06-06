import React from "react";
import GeneralTemplate from "@templates/GeneralTemplate";
import CreateEmployeeTemplate from "@templates/CreateEmployeeTemplate";

const HomePage: React.FC = () => {
	return (
		<GeneralTemplate>
			<CreateEmployeeTemplate />
		</GeneralTemplate>
	);
};

export default HomePage;
