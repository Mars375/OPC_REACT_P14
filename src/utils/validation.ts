import { EmployeeFormData } from "@organisms/EmployeeForm";

export const validate = (
	formData: EmployeeFormData
): Partial<EmployeeFormData> => {
	const newErrors: Partial<EmployeeFormData> = {};
	if (!formData.firstName) newErrors.firstName = "First Name is required";
	if (!formData.lastName) newErrors.lastName = "Last Name is required";
	if (!formData.dateOfBirth)
		newErrors.dateOfBirth = "Date of Birth is required";
	if (!formData.startDate) newErrors.startDate = "Start Date is required";
	if (!formData.street) newErrors.street = "Street is required";
	if (!formData.city) newErrors.city = "City is required";
	if (!formData.state) newErrors.state = "State is required";
	if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";
	if (!formData.department) newErrors.department = "Department is required";
	return newErrors;
};
