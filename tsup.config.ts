import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src', '!src/**/*.spec.*'],
    tsconfig: './tsconfig.json',
    clean: true,
    outDir: 'build',
});
