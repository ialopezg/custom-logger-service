import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const filename = pkg.main.replace('.js', '').replace('lib/', '');
const outputDir = 'lib';

const globals = {
  'custom-console-colors': 'CustomConsoleColors',
};

export default {
  input: `src/${filename}.ts`,
  external: ['custom-console-colors'],
  output: [
    {
      dir: outputDir,
      entryFileNames: `${filename}.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.min.js`,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].js`,
      format: 'es',
      sourcemap: true,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].min.js`,
      format: 'es',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].js`,
      format: 'umd',
      sourcemap: true,
      name: 'CustomLoggerService',
      globals,
    },
    {
      dir: outputDir,
      entryFileNames: `${filename}.[format].min.js`,
      format: 'umd',
      sourcemap: true,
      name: 'CustomLoggerService',
      plugins: [terser()],
      globals,
    },
  ],
  plugins: [
    resolve(),
    typescript(),
  ],
};
