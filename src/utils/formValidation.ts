import { EmployeeFormData } from "@/types/employeeTypes";
import { fieldRules } from "@/config/fieldRules";

export function validate(
	formData: EmployeeFormData
): Partial<EmployeeFormData> {
	const errors: Partial<EmployeeFormData> = {};

	Object.keys(fieldRules).forEach((key) => {
		const value = formData[key as keyof EmployeeFormData];
		const rules = fieldRules[key as keyof typeof fieldRules];

		if (rules.required && !value) {
			errors[key as keyof EmployeeFormData] = rules.required;
		}

		if ("pattern" in rules && value && !rules.pattern.value.test(value)) {
			errors[key as keyof EmployeeFormData] = rules.pattern.message;
		}
	});

	return errors;
}
