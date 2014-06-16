module.exports = {
	"gruntfile": {
		"files": ["Gruntfile.js","grunt/*.js"],
		"tasks": ["jshint:gruntfile"],
		"interrupt": true
	},
	"js": {
		"files": "src/scripts/**/*",
		"tasks": ["jshint:js", "browserify:dev"],
		"interrupt": true
	},
	"css": {
		"files": "src/styles/**/*.scss",
		"tasks": "compass:dev",
		"interrupt": true
	},
	"files": {
		"files": "src/files/**/*",
		"tasks": "copy:files",
		"interrupt": true
	},
	"root": {
		"files": "src/*.*",
		"tasks": "copy:root",
		"interrupt": true
	},
	"version": {
		"files": ["package.json"],
		"tasks": "version",
		"interrupt": true
	}
};