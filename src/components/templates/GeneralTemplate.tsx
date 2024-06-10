import React from "react";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";

interface GeneralTemplateProps {
	children: React.ReactNode;
}

/**
 * General layout template for the application.
 * This component wraps the content with a Header and a Footer, providing a consistent layout structure.
 * It uses TailwindCSS for styling to ensure responsiveness and style consistency.
 *
 * @param {React.ReactNode} children - The content to be displayed between the header and footer.
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
