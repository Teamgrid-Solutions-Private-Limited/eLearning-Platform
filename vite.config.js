import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/authoring-tool/",
	server: {
		host: "localhost",
		port: 5173,
		fs: {
			allow: [".."],
		},
    allowedHosts: 'All'
	},
});
