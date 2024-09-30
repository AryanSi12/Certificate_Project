import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Uncomment the proxy settings when you add a backend
    /*
    proxy: {
      '/api': 'http://localhost:5000',  // Point this to your backend server
    },
    */
  },
});
