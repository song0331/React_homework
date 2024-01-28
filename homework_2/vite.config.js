/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'ProductList': path.resolve(__dirname, 'src/components/ProductList'),
      'ProductListSort': path.resolve(__dirname, 'src/components/ProductListSort'),
      'Product': path.resolve(__dirname, 'src/components/Product'),
      'Pagination': path.resolve(__dirname, 'src/components/Pagination'),
      'data': path.resolve(__dirname, 'src/data'),
      'images': path.resolve(__dirname, 'src/assets/images'),
    }
  },
  css: {
    devSourcemap: true
  }
})
