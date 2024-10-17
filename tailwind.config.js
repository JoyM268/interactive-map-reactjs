/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			scale: {
				70: "0.7",
			},

			fontFamily: {
				courier: ["Courier New", "Courier", "monospace"],
			},

			zIndex: {
				100: "100",
			},

			transitionDuration: {
				600: "0.6s",
				400: "0.4s",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".scrollbar-none": {
					"scrollbar-width": "none",
				},
			});
		},

		function ({ addUtilities }) {
			addUtilities({
				".no-select": {
					"-webkit-touch-callout": "none",
					"-webkit-user-select": "none",
					"-khtml-user-select": "none",
					"-moz-user-select": "none",
					"-ms-user-select": "none",
					"user-select": "none",
				},
			});
		},

		function ({ addUtilities }) {
			addUtilities({
				".appear-effect": {
					transition: "0.9s",
				},
			});
		},

		function ({ addUtilities }) {
			addUtilities({
				".content-empty": {
					content: "",
				},
			});
		},
	],
};
