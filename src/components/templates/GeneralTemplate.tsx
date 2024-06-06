import React from "react";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";

interface GeneralTemplateProps {
	children: React.ReactNode;
}

const GeneralTemplate: React.FC<GeneralTemplateProps> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen dark:bg-background-dark'>
			<Header />
			<main className='container mx-auto p-4 flex-grow bg-background dark:bg-background-dark'>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default GeneralTemplate;
