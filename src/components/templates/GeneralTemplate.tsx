import React from "react";
import { Header, Footer } from "@/index";

/**
 * Interface for GeneralTemplate props.
 * @interface
 * @property {React.ReactNode} children - The content to be displayed between the header and footer.
 */
interface GeneralTemplateProps {
	children: React.ReactNode;
}

/**
 * Represents a general layout template for the application.
 *
 * This component wraps the main content with a Header and a Footer. It is designed to be used
 * as a layout template for pages that require a consistent header and footer.
 *
 * @component
 * @param {GeneralTemplateProps} props - The props containing children to render within the layout.
 * @example
 * return (
 *   <GeneralTemplate>
 *     <div>Page Content Here</div>
 *   </GeneralTemplate>
 * )
 */
const GeneralTemplate: React.FC<GeneralTemplateProps> = React.memo(
	({ children }) => {
		return (
			<div className='flex flex-col min-h-screen bg-background transition-[background-color] duration-300 ease-in-out'>
				<Header />
				<main className='mx-auto p-6 flex-grow flex justify-center'>
					{children}
				</main>
				<Footer />
			</div>
		);
	}
);

export default GeneralTemplate;
