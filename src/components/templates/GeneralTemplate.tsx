import React from "react";
import Header from "@/components/UI/organisms/Header";
import Footer from "@/components/UI/organisms/Footer";

interface GeneralTemplateProps {
	children: React.ReactNode;
}

const GeneralTemplate: React.FC<GeneralTemplateProps> = React.memo(
	({ children }) => {
		return (
			<div className='flex flex-col min-h-screen bg-light dark:bg-background-dark text-primary-light dark:text-primary-dark transition-[background-color] duration-300 ease-in-out'>
				<Header />
				<main className='container mx-auto p-6 flex-grow flex justify-center items-center'>
					{children}
				</main>
				<Footer />
			</div>
		);
	}
);

export default GeneralTemplate;
