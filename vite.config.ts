import { defineConfig } from "vite";
import { readFileSync } from "node:fs";

export default defineConfig(({ command }) => ({
  server: {
    https: {
      key: readFileSync("./keys/agent2-key.pem"),
      cert: readFileSync("./keys/agent2-cert.pem"),
    },
  },
}));
