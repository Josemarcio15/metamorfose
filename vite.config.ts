import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  // Substitua pelo nome exato do seu repositório no GitHub
  base: '/metamorfose/',
})