module.exports = {
	"files": {
		"files": [{
			"expand": true,
			"cwd": "src/files/",
			"src": ["**"],
			"dest": "build/files/"
		}]
	},
	"root": {
		"files": [{
			"expand": true,
			"cwd": "src/",
			"src": ["*.*"],
			"dest": "build/"
		}]
	}
};