import { FieldRules } from "@/types/formTypes";

export const fieldRules: FieldRules = {
	firstName: { required: true, message: "First Name is required" },
	lastName: { required: true, message: "Last Name is required" },
	dateOfBirth: { required: true, message: "Date of Birth is required" },
	startDate: { required: true, message: "Start Date is required" },
	department: { required: true, message: "Department is required" },
	street: { required: true, message: "Street is required" },
	city: { required: true, message: "City is required" },
	state: { required: true, message: "State is required" },
	zipCode: { required: true, message: "Zip Code is required" },
};
