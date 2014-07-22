/**
 *	Super turbo-nutter Gruntfile
 *	Thanks to @pbakaus for much inspiration:
 *	http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/
 *	…and also Cowboy:
 *	https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb
 *	NPM Packages to be kept up to date with: `npm-check-updates -u`
 *    (after installing `npm install npm-check-updates -g` first)
 *	Thanks to @MrMartineau for that tip:
 *	http://martineau.tv/blog/2013/12/more-efficient-grunt-workflows/
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
		}
	});

	// Load config-less tasks
	grunt.loadNpmTasks('grunt-newer');

	// Load per-task config from separate files.
	grunt.loadTasks('grunt');

	// Default task(s)
	grunt.registerTask('default', 'Watch and rebuild assets', [
		'sass:dev',
		'newer:concat',
		'watch'
		// notify called by watch task
	]);

	// Running watch with Node-driven Sass build
	grunt.registerTask('nodesass', 'Watch and rebuild assets', [
		'sass:devnode',
		'newer:concat',
		'watch' // I'm not smart enough to get this working for watch, yet
	]);

	grunt.registerTask('prep', 'Generate custom Modernizr', [
		'modernizr',
		'notify:modernizr'
	]);

	grunt.registerTask('build', 'Force EVERYTHING to regenerate', [
		'sass:dev',
		'sass:dist',
		'autoprefixer',
		'concat',
		'uglify',
		'modernizr',
		'notify:rebuild'
	]);

};
