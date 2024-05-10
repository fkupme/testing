import globals from "globals";
import pluginJs from "@eslint/js";


export default [
	{ 
		ignores: ["webpack.config.js", "dist/", "coverage/", ]
	},
	{ 
		files: ["**/*.js"], languageOptions: { sourceType: "module" }, 
	},
	{ 
		languageOptions: { globals: globals.jest}
	},
	
	pluginJs.configs.recommended,
];