import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@atoms": path.resolve(__dirname, "./src/components/UI/atoms"),
			"@molecules": path.resolve(__dirname, "./src/components/UI/molecules"),
			"@organisms": path.resolve(__dirname, "./src/components/UI/organisms"),
			"@templates": path.resolve(__dirname, "./src/components/templates"),
		},
	},
});
