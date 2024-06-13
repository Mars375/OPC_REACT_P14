import { FieldRules } from "@/types/formTypes";
import { fieldRules } from "@/config/formRules";
import { EmployeeFormData } from "@/types/employeeTypes";

export const validate = (
	formData: EmployeeFormData
): Partial<EmployeeFormData> => {
	const errors: Partial<EmployeeFormData> = {};
	Object.keys(fieldRules).forEach((key) => {
		const rule = fieldRules[key as keyof FieldRules];
		if (rule.required && !formData[key as keyof EmployeeFormData]) {
			errors[key as keyof EmployeeFormData] = rule.message;
		}
	});
	return errors;
};
