import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
   
    // Add the nodeResolve plugin to handle polyfills for Solana libraries
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
  ],
  define: {
    // Manually define 'global' and 'process' for polyfilling dependencies
    'global': 'window',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
})