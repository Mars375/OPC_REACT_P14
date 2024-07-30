/**
 * Configuration for field validation rules.
 *
 * This module defines validation rules for various fields used in forms throughout the application.
 * Each field has rules for required validation and, optionally, pattern matching.
 */
export const fieldRules = {
	firstName: {
		required: "First name is required",
		pattern: {
			value: /^[a-zA-Z]+$/, // Regex: Matches only alphabetic characters (no spaces or numbers)
			message: "First name can only contain letters",
		},
	},
	lastName: {
		required: "Last name is required",
		pattern: {
			value: /^[a-zA-Z]+$/, // Regex: Matches only alphabetic characters (no spaces or numbers)
			message: "Last name can only contain letters",
		},
	},
	dateOfBirth: {
		required: "Date of birth is required",
		pattern: {
			value: /^\d{2}\/\d{2}\/\d{4}$/, // Regex: Matches date format MM/DD/YYYY
			message: "Date of birth must be in the format MM/DD/YYYY",
		},
	},
	startDate: {
		required: "Start date is required",
		pattern: {
			value: /^\d{2}\/\d{2}\/\d{4}$/, // Regex: Matches date format MM/DD/YYYY
			message: "Start date must be in the format MM/DD/YYYY",
		},
	},
	department: {
		required: "Department is required",
	},
	street: {
		required: "Street is required",
		pattern: {
			value: /^[a-zA-Z0-9\s]+$/, // Regex: Matches letters, numbers, and spaces
			message: "Street can only contain letters, numbers and spaces",
		},
	},
	city: {
		required: "City is required",
		pattern: {
			value: /^[a-zA-Z\s]+$/, // Regex: Matches letters and spaces only
			message: "City can only contain letters and spaces",
		},
	},
	state: {
		required: "State is required",
	},
	zipCode: {
		required: "Zip code is required",
		pattern: {
			value: /^\d{5}(-\d{4})?$/, // Regex: Matches a 5-digit number or a 9-digit format XXXXX-XXXX
			message:
				"Zip code must be a 5-digit number or a 9-digit format XXXXX-XXXX",
		},
	},
};
