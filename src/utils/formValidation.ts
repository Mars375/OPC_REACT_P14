import { EmployeeFormData } from "@/types/employeeTypes";
import { fieldRules } from "@/config/fieldRules";

/**
 * Validates form data against predefined field rules.
 *
 * This function checks each field in the form data against the corresponding rules defined in `fieldRules`.
 * It returns an object containing error messages for fields that do not comply with the rules.
 *
 * @param {EmployeeFormData} formData - The form data to validate.
 * @returns {Partial<EmployeeFormData>} An object with error messages for each field that fails validation.
 */
export function validate(
	formData: EmployeeFormData
): Partial<EmployeeFormData> {
	const errors: Partial<EmployeeFormData> = {};

	// Iterate over each field rule and apply validation
	Object.keys(fieldRules).forEach((key) => {
		const value = formData[key as keyof EmployeeFormData];
		const rules = fieldRules[key as keyof typeof fieldRules];

		// Check if the field is required and not filled
		if (rules.required && !value) {
			errors[key as keyof EmployeeFormData] = rules.required;
		}

		// Check if the field has a pattern rule and fails the pattern validation
		if ("pattern" in rules && value && !rules.pattern.value.test(value)) {
			errors[key as keyof EmployeeFormData] = rules.pattern.message;
		}
	});

	return errors;
}
