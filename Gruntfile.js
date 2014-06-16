/**
 *	Super turbo-nutter Gruntfile
 *	Thanks to @pbakaus for much inspiration:
 *	http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
 *	Author: @devolute / github: ianp
 */

module.exports = function(grunt) {

	// measures the time each task takes
	// require('time-grunt')(grunt);

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Global configuration variables
		dirs: {
			src: 'src',
			dest: 'build',
			css_build_folder: '/assets/css/',
			js_build_folder: '/assets/js/'
		},

		sass: {
			dist: {
				options: {
					// style: 'compressed', // grunt-contrib-sass (Ruby)
					outputStyle: 'compressed' // grunt-sass (node)
				},
				files: {
					'<%= dirs.dest %><%= dirs.css_build_folder %>main.min.css': '<%= dirs.src %>/assets/sass/main.scss'
				}
			},
			dev: {
				options: {
					style: 'expanded',
					sourcemap: true, // grunt-contrib-sass (Ruby)
					// sourceMap: true // grunt-sass (Node)
				},
				files: {
					'<%= dirs.dest %><%= dirs.css_build_folder %>main.css': '<%= dirs.src %>/assets/sass/main.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
            dist: {
                files: {
                    '<%= dirs.dest %><%= dirs.css_build_folder %>main.css': '<%= dirs.dest %><%= dirs.css_build_folder %>main.css'
                }
            },
			dev: {
				files: {
					'<%= dirs.dest %><%= dirs.css_build_folder %>main.min.css': '<%= dirs.dest %><%= dirs.css_build_folder %>main.min.css'
				}
			}
        },

		concat: {
			options: {
			separator: ';',
			},
			dist: {
				src: [
					'<%= dirs.src %>/assets/js/main.js'
				],
				dest: '<%= dirs.dest %><%= dirs.js_build_folder %>main.js'
			},
		},


		uglify: {
			my_target: {
				options: {
					compress: {
						drop_console: true
					}
				},
				files: {
					'<%= dirs.dest %><%= dirs.js_build_folder %>main.min.js': ['<%= dirs.dest %><%= dirs.js_build_folder %>main.js']
				}
			}
		},

		watch: {
			css: {
				files: '<%= dirs.src %>/assets/sass/**/*.scss',
				tasks: ['sass', 'notify:sass']
			},
			js: {
				files: '<%= dirs.src %>/assets/js/*',
				tasks: ['concat', 'notify:concat']
			}
		},

		notify: {
			sass: {
				options: {
					title: 'Grunt: Sass',
					message: 'CSS built successful'
				}
			},
			concat: {
				options: {
					title: 'Grunt: JS',
					message: 'JS concat successful'
				}
			},
			modernizr: {
				options: {
					title: 'Modernizr prep',
					message: 'Custom Modernizr generated'
				}
			},
			rebuild: {
				options: {
					message: 'Everything rebuilt'
				}
			}
		},

		modernizr: {
			dist: {
				"devFile" : "bower_components/modernizr/modernizr.js",

				"outputFile" : "<%= dirs.dest %><%= dirs.js_build_folder %>vendor/modernizr-custom.js",

				"files" : {
					"src": ['<%= dirs.src %>/assets/**/*.scss','<%= dirs.src %>/assets/**/*.js']
				}
			}
		}
	});

	// grunt.loadNpmTasks('grunt-contrib-sass'); // Ruby
	grunt.loadNpmTasks('grunt-sass'); // Node - PICK ONE!
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.loadNpmTasks('grunt-contrib-uglify');;
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks("grunt-modernizr");
	grunt.loadNpmTasks('grunt-newer');

	// Default task(s)
	grunt.registerTask('default', 'Watch and rebuild assets', [
		'newer:sass:dev',
		'newer:concat',
		'watch'
		// notify called by watch task
	]);

	grunt.registerTask('prep', 'Generate custom Modernizr', [
		'modernizr',
		'notify:modernizr'
	]);

	grunt.registerTask('build', 'Force everything to regenerate', [
		'sass:dev',
		'sass:dist',
		'autoprefixer',
		'concat',
		'uglify',
		'modernizr',
		'notify:rebuild'
	]);

};
