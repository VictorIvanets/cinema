import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  base: '/cinema',
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173
  }
});
