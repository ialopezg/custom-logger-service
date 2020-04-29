import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const outputDir = pkg.main.substr(0, pkg.main.indexOf('/')) || 'lib'
const filename = pkg.main.replace(outputDir + '/', '').replace('.js', '')

const production = !process.env.ROLLUP_WATCH

const outputs = [
  {
    dir: outputDir,
    entryFileNames: `${filename}.js`,
    format: 'cjs',
    sourcemap: true
  },
  {
    dir: outputDir,
    entryFileNames: `${filename}.min.js`,
    format: 'cjs',
    sourcemap: true
  }
]

const common = {
  input: 'src/logger.js',
  external: ['react'],
  plugins: [
    resolve(),
    production &&
      terser({
        include: [/^.+\.min\.js$/, '*es*', '*umd*', '*iife*']
      })
  ]
}

export default outputs.map(output => ({
  ...common,
  output
}))
