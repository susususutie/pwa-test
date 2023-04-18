import { defineConfig } from "vite";

export default defineConfig(({command}) => ({
  base: command === 'serve' ? '/' : '/pwa-test/',
  server: {
    https: {
      // key: fs.readFileSync("keys/agent2-key.pem"),
      // cert: fs.readFileSync("keys/agent2-cert.pem"),
    },
  },
}));
