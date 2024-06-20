export const buttonStyles = {
	base: "px-6 py-2 rounded-full focus:outline-none font-semibold",
	color: {
		primary:
			"bg-[#0b57d0] dark:bg-[#004a77ff] text-white dark:text-[#c2e7ffff] hover:brightness-110 hover:shadow-xl",
		secondary: "",
		success: "bg-success hover:bg-success/80 text-white",
		error: "bg-error hover:bg-error/80 text-white",
		warning: "bg-warning hover:bg-warning/80 text-gray-800",
		info: "bg-info hover:bg-info/80 text-white",
	},
	variant: {
		text: "bg-transparent",
		outlined:
			"text-[#0b57d0] dark:text-[#c2e7ffff] hover:bg-[#0b57d0]/20 dark:hover:bg-[#004a77ff]/30",
		contained: "shadow-default",
	},
	size: {
		small: "text-sm",
		medium: "text-base",
		large: "text-lg",
	},
};
