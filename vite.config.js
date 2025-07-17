// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-site/', // coloque aqui o nome do seu repositório
  plugins: [react()],
})
