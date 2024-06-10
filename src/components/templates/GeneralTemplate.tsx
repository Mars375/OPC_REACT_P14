import React from "react";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";

interface GeneralTemplateProps {
	children: React.ReactNode;
}

/**
 * A general layout template that includes a header, footer, and a main content area.
 * This template is used throughout the application to maintain a consistent layout structure.
 */

const GeneralTemplate: React.FC<GeneralTemplateProps> = React.memo(
	({ children }) => {
		return (
			<div className='flex flex-col min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'>
				<Header />
				<main className='container mx-auto p-6 flex-grow dark:text-gray-100 flex justify-center items-center'>
					{children}
				</main>
				<Footer />
			</div>
		);
	}
);

export default GeneralTemplate;
