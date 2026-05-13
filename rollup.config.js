import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';

const obfuscate = {
	ecma: 2020,
	compress: {
		drop_console: true,
		drop_debugger: true,
		hoist_funs: true,
		module: true,
		toplevel: true,
	},
	mangle: {
		keep_classnames: /^(Pay|Rep)/,
		properties: {
			regex: /^[#_]/,
		}
	},
	//format: {
	//	semicolons: false,
	//},
};

export default [
	{
		input: './src/index.ts',
		output: [
			// {
			//   file: '../dist/trakit-src.js',
			//   format: 'es',
			// },
			{
				file: 'dist/trakit-src.min.js',
				format: 'es',
				exports: 'named',
				plugins: [terser(obfuscate)]
			}
		],
		plugins: [typescript({
			tsconfig: './tsconfig.json',
			//tsconfigOverride: {
			//	compilerOptions: {
			//		//declaration: false,
			//		declarationDir: 'dist',
			//		emitDeclarationOnly: false,
			//	}
			//}
		})],
		external: [
			'@trakit/objects',
		],
	}
];