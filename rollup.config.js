import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const production = process.env.IS_NETLIFY_PRODUCTION

export default {
  input: 'src/assets/index.js',
  output: {
    file: 'dist/scripts/bundle.js',
    format: 'iife'
  },
  plugins: [
    commonjs(),
    resolve(),
    production && terser()
  ]
}
