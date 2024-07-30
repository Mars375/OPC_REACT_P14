/**
 * Index file for component exports.
 *
 * This file serves as a central hub for exporting components used across the HRnet application.
 * It helps in maintaining clean import statements in other parts of the application by providing
 * a single point of reference for component imports.
 */

// Template components
export { default as GeneralTemplate } from "./components/templates/GeneralTemplate";
export { default as CreateEmployeeTemplate } from "./components/templates/CreateEmployeeTemplate";
export { default as EmployeeListTemplate } from "./components/templates/EmployeeListTemplate";

// Atomic UI components
export { default as Button } from "./components/UI/atoms/Button";
export { default as Input } from "./components/UI/atoms/Input";
export { default as Label } from "./components/UI/atoms/Label";
export { default as ThemeToggle } from "./components/UI/atoms/ThemeToggle";

// Molecular UI components
export { default as FormField } from "./components/UI/molecules/FormField";

// Organismic UI components
export { default as Header } from "./components/UI/organisms/Header";
export { default as Footer } from "./components/UI/organisms/Footer";
export { default as EmployeeForm } from "./components/UI/organisms/EmployeeForm";
export { default as EmployeeTable } from "./components/UI/organisms/EmployeeTable";
