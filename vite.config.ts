import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/edinsonRmz/Diie-portafolio',
  server: {
    host: true,
    open: true
  }
})