import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'johar-trails' below to your exact GitHub repo name.
// e.g. if your repo URL is https://github.com/yourname/johar-trails,
// base should stay '/johar-trails/'. If your repo has a different name,
// update this to '/your-repo-name/'. If deploying to a user/organization
// page repo named '<username>.github.io', set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/johar-trails/',
})
