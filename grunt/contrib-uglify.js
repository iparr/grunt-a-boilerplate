module.exports = function(grunt) {

	grunt.config('uglify', {
		options: {
			compress: {
				drop_console: true
			}
		},
		my_target: {
			files: {
				'<%= dirs.dest %><%= dirs.js_build_folder %>main.min.js': ['<%= dirs.dest %><%= dirs.js_build_folder %>main.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

};
