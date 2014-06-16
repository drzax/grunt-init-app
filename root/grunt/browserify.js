module.exports = {
	"options": {
		"transform": ["brfs", "deglobalify"]
	},
	"dev": {
		"options": {
			"debug": true
		},
		"files": {
			"build/scripts/cell-slides.js": ["src/scripts/cell-slides.js"]
		}
	},
	"dist": {
		"files": {
			"build/scripts/cell-slides.js": ["src/scripts/cell-slides.js"]
		}
	}
};