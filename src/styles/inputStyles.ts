export const inputStyles = {
	base: "w-full rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50",
	color: (color: string) => `bg-${color}-500 text-${color}-700`,
	size: {
		small: "p-2 text-sm",
		medium: "p-3 text-base",
		large: "p-4 text-lg",
	},
};
