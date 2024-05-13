import globals from "globals";
import pluginJs from "@eslint/js";


export default [
	{ 
		ignores: [ "http-module-mock.js", "webpack.config.js", "dist/", "coverage/", ]
	},
	{ 
		files: ["**/*.js"], languageOptions: { sourceType: "module" }, 
	},
	{ 
		languageOptions: { globals: globals.browser}
	},
	{ 
		languageOptions: { globals: globals.jest}
	},
	
	pluginJs.configs.recommended,
];