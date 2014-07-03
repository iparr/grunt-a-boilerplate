module.exports = function(grunt) {

	grunt.config('sass', {
		dist: {
			options: {
				style: 'compressed', // grunt-contrib-sass (Ruby)
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.min.css': '<%= dirs.src %>/assets/sass/main.scss'
			}
		},
		dev: {
			options: {
				style: 'expanded',
				sourcemap: true, // grunt-contrib-sass (Ruby)
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.css': '<%= dirs.src %>/assets/sass/main.scss'
			}
		},
		distnode: {
			options: {
				outputStyle: 'compressed' // grunt-sass (node)
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.min.css': '<%= dirs.src %>/assets/sass/main.scss'
			}
		},
		devnode: {
			options: {
				style: 'expanded',
				sourceMap: true // grunt-sass (Node)
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.css': '<%= dirs.src %>/assets/sass/main.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass'); // Ruby
	// grunt.loadNpmTasks('grunt-sass'); // Node - PICK ONE!

};
