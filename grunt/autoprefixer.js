module.exports = function(grunt) {

	grunt.config('autoprefixer', {
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
	});

	grunt.loadNpmTasks('grunt-autoprefixer');

};
