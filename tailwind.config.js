module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {},
	},

	plugins: [require("daisyui")],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#FFE999",
					secondary: "#f6d860",
					accent: "#37cdbe",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
};
