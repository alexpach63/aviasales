// This definition is used before typings-for-css-modules-loader generates .d.ts files.
// As soon as typings are found tsc will prefer them.
declare module '*.css' {
	const classes: {[className: string]: string};
	export = classes;
}

declare module '*.scss' {
	const classes: {[className: string]: string};
	export = classes;
}