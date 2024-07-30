/**
 * Provides a list of department options used in select dropdowns throughout the application.
 *
 * This array is used to populate select dropdowns where users can choose a department.
 * Each option is an object with a `value` and `label`, where `value` is used as the identifier
 * and `label` is what the user sees in the UI.
 */
import { DepartmentOptions } from "@/types/departmentTypes";

export const departmentOptions: DepartmentOptions = [
	{ value: "Sales", label: "Sales" },
	{ value: "Marketing", label: "Marketing" },
	{ value: "Engineering", label: "Engineering" },
	{ value: "Human Resources", label: "Human Resources" },
	{ value: "Legal", label: "Legal" },
];
