import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate Redoc library into its own chunk
          if (id.includes("redoc")) {
            return "redoc";
          }
          // Separate React and related libraries
          if (id.includes("react") || id.includes("react-dom")) {
            return "react";
          }
          // Separate styling libraries
          if (id.includes("styled-components")) {
            return "styled";
          }
          // Separate state management
          if (id.includes("mobx")) {
            return "state";
          }
          // Separate node_modules into vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // Increase chunk size warning limit since we're handling it with manual chunks
    chunkSizeWarningLimit: 1000,
    // Enable source maps for better debugging
    sourcemap: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["redoc", "react", "react-dom", "styled-components", "mobx"],
  },
});
