import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const obfuscate = {
  ecma: 2016,
  // compress: {
  //   drop_console: true,
  //   drop_debugger: true,
  //   hoist_funs: true,
  //   join_vars: true,
  //   module: true,
  //   toplevel: true,
  // },
  // sourceMap: {
  //   filename: '../_publish/trakit-commands.min.js',
  // },
  mangle: {
    keep_classnames: /^(Pay|Rep)/,
  },
};

export default [
  {
    input: 'index.ts',
    output: [
      // {
      //   file: '../_publish/trakit-commands.js',
      //   format: 'es',
      // },
      {
        file: '_publish/trakit-commands.min.js',
        format: 'es',
        plugins: [terser(obfuscate)]
      }
    ],
    plugins: [typescript()],
	external: ['@trakit/objects']
  }
];