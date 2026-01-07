import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: false,
  treeshake: true,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  outExtension({ format }) {
    return format === 'cjs' ? { js: '.cjs' } : { js: '.js' }
  },
})


