import React from "react";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";

interface GeneralTemplateProps {
	children: React.ReactNode;
}

const GeneralTemplate: React.FC<GeneralTemplateProps> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen bg-white dark:bg-dark-background text-gray-900 dark:text-dark-text'>
			<Header />
			<main className='container mx-auto p-4 flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};

export default GeneralTemplate;
