import React from "react";
import GeneralTemplate from "@/components/templates/GeneralTemplate";
import CreateEmployeeTemplate from "@/components/templates/CreateEmployeeTemplate";

const HomePage: React.FC = () => {
	return (
		<GeneralTemplate>
			<CreateEmployeeTemplate />
		</GeneralTemplate>
	);
};

export default HomePage;
