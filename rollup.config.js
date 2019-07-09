const json = require('rollup-plugin-json');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'libs/index.js',
  output: {
    file: 'package/index.js',
    format: 'cjs'
  },
  plugins: [
    json(),
    resolve(),
    commonjs({
      ignore: id => /^[^.]/.test(id),
    }),
    babel()
  ],
};
