export const inputStyles = {
	base: "flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm file:border-0 file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
	color: {
		primary:
			"bg-background file:bg-transparent  placeholder:text-muted-foreground",
		error: "border-destructive focus:border-2",
	},
	size: {
		small: "text-sm",
		medium: "text-base",
		large: "text-lg",
	},
};
