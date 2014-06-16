module.exports = function(grunt) {

	grunt.config('modernizr', {
		dist: {
			"devFile" : "bower_components/modernizr/modernizr.js",

			"outputFile" : "<%= dirs.dest %><%= dirs.js_build_folder %>vendor/modernizr-custom.js",

			"files" : {
				"src": ['<%= dirs.src %>/assets/**/*.scss','<%= dirs.src %>/assets/**/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-modernizr');

};
