import React from "react";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";

interface GeneralTemplateProps {
	children: React.ReactNode;
}

const GeneralTemplate: React.FC<GeneralTemplateProps> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
			<Header />
			<main className='container mx-auto p-6 flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default GeneralTemplate;
