/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      '@': path.resolve(__dirname, 'src'),
      'data': path.resolve(__dirname, 'src/data'),
      'images': path.resolve(__dirname, 'src/assets/images'),
    }
  },
  css: {
    devSourcemap: true
  }
})
