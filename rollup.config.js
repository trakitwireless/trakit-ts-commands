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
		input: './commands/index.ts',
		output: [
			// {
			//   file: '../_publish/trakit-commands.js',
			//   format: 'es',
			// },
			{
				file: '_publish/trakit-commands.min.js',
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
			//		declarationDir: '_publish',
			//		emitDeclarationOnly: false,
			//	}
			//}
		})],
		external: [
			'@trakit/objects',
		],
	}
];