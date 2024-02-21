import { defineConfig } from "electron-vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    publicDir: false,
    main: {
		build: {
			outDir: 'dist/main'
		}
	},
	preload: {
		build: {
			outDir: 'dist/preload'
		}
	},
	renderer: {
		build: {
			outDir: 'dist/renderer'
		},
		plugins: [react()]
	}
});