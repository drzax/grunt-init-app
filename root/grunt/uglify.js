module.exports = {
	"dist": {
		"options": {
			"preserveComments": "some"
		},
		"files": [{
			"expand": true,
			"cwd": "build/scripts",
			"src": "**/*.js",
			"dest": "build/scripts"
      }]
	}
};