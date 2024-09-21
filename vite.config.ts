import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
    // Load app-level env vars to node-level env vars.
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return defineConfig({
			plugins: [vue()],
			base: process.env.VITE_MODE == 'DEV' ?
				'/' : "/profile/",
			resolve: {
				alias: [
					{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
					{ find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
				],
			},
			server: {
				host: "0.0.0.0",
				port: 5173
			}
    });
}
