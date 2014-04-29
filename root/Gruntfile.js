/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dev: ['.dev'],
			dist: ['dist']
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				files: 'Gruntfile.js'
			},
			js: {
				files: 'src/js/**/*.js'
			}
		},

		browserify: {
			options: {
				transform: ['brfs', 'deglobalify']
			},
			dev: {
				options: {
					debug: true
				},
				files: {
					'.dev/js/app.js': ['src/js/app.js']
				}
			},
			dist: {
				files: {
					'dist/js/app.js': ['src/js/app.js']
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/js/app.js': ['dist/js/app.js']
				}
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'dist/css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'src/scss',
					cssDir: '.dev/css'
				}
			}
		},

		dir2json: {
			dev: {
				root: 'src/data/',
				dest: '.dev/data/data.json',
				options: { space: '\t' }
			},
			dist: {
				root: 'src/data/',
				dest: 'dist/data/data.json'
			}
		},

		copy: {
			filesdev: {
				files: [{
					expand: true,
					cwd: 'src/files',
					src: ['**'],
					dest: '.dev/files/'
				}]
			},
			files: {
				files: [{
					expand: true,
					cwd: 'src/files',
					src: ['**'],
					dest: 'dist/files/'
				}]
			},
			rootdev: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.*'],
					dest: '.dev/'
				}]
			},
			root: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.*'],
					dest: 'dist/'
				}]
			}
		},

		connect: {
			dev: {
				options: {
					port: 8000,
					hostname: '*',
					base: '.dev/'
				}
			}
		},

		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile'],
				interrupt: true
			}
			js: {
				files: 'src/js/**/*',
				tasks: ['jshint:js', 'browserify:dev'],
				interrupt: true
			},
			css: {
				files: 'src/scss/**/*.scss',
				tasks: 'compass:dev',
				interrupt: true
			},
			data: {
				files: 'src/data/**/*',
				tasks: 'dir2json:dev',
				interrupt: true
			},
			files: {
				files: 'src/files/**/*',
				tasks: 'copy:filesdev',
				interrupt: true
			},
			root: {
				files: 'src/*.*',
				tasks: 'copy:rootdev',
				interrupt: true
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-dir2json');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dev', [
		'clean:dev',
		'jshint:js',
		'browserify:dev',
		'compass:dev',
		'dir2json:dev',
		'copy:filesdev',
		'copy:rootdev'
	]);

	grunt.registerTask('default', [
		'dev',
		'connect',
		'watch'
	]);

	grunt.registerTask('dist', [
		'clean:dist',
		'jshint:js',
		'browserify:dist',
		'uglify:dist',
		'compass:dist',
		'dir2json:dist',
		'copy:files',
		'copy:root'
	]);

};
