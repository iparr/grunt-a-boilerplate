module.exports = function(grunt) {

	grunt.config('watch', {
		css: {
			files: '<%= dirs.src %>/assets/scss/**/*.scss',
			tasks: ['sass:dev', 'notify:sass']
		},
		js: {
			files: '<%= dirs.src %>/assets/js/*',
			tasks: ['concat', 'notify:concat']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

};
