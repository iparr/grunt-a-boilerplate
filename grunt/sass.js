module.exports = function(grunt) {

	grunt.config('sass', {
		dist: {
			options: {
				style: 'compressed', // grunt-contrib-sass (Ruby)
				// outputStyle: 'compressed', // grunt-sass (node)
				sourcemap: 'none'
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.min.css': '<%= dirs.src %>/assets/scss/main.scss'
			}
		},
		dev: {
			options: {
				style: 'expanded'
				// sourceMap: true // grunt-sass (Node)
			},
			files: {
				'<%= dirs.dest %><%= dirs.css_build_folder %>main.css': '<%= dirs.src %>/assets/scss/main.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass'); // Ruby
	// grunt.loadNpmTasks('grunt-sass'); // Node - PICK ONE!

};
