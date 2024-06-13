export const fieldRules = {
	firstName: {
		required: "First name is required",
		pattern: {
			value: /^[a-zA-Z]+$/,
			message: "First name can only contain letters",
		},
	},
	lastName: {
		required: "Last name is required",
		pattern: {
			value: /^[a-zA-Z]+$/,
			message: "Last name can only contain letters",
		},
	},
	dateOfBirth: {
		required: "Date of birth is required",
		pattern: {
			value: /^\d{4}-\d{2}-\d{2}$/,
			message: "Date of birth must be in the format YYYY-MM-DD",
		},
	},
	startDate: {
		required: "Start date is required",
		pattern: {
			value: /^\d{4}-\d{2}-\d{2}$/,
			message: "Start date must be in the format YYYY-MM-DD",
		},
	},
	department: {
		required: "Department is required",
	},
	street: {
		required: "Street is required",
		pattern: {
			value: /^[a-zA-Z0-9\s]+$/,
			message: "Street can only contain letters, numbers and spaces",
		},
	},
	city: {
		required: "City is required",
		pattern: {
			value: /^[a-zA-Z\s]+$/,
			message: "City can only contain letters and spaces",
		},
	},
	state: {
		required: "State is required",
	},
	zipCode: {
		required: "Zip code is required",
		pattern: {
			value: /^\d{5}(-\d{4})?$/,
			message:
				"Zip code must be a 5-digit number or a 9-digit format XXXXX-XXXX",
		},
	},
};
