import tailwindcss from '@tailwindcss/vite'


export default { root: '.', build: { outDir: 'dist' } ,  plugins: [
    tailwindcss(),
  ], };
