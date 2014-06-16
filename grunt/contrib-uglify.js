module.exports = function(grunt) {

	grunt.config('uglify', {
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
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

};
