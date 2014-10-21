module.exports = function(grunt) {

	grunt.config('assemble', {
		options: {
			// data:	"path/to/config.json"
			plugins: ['permalinks'],
			layout: "default.hbs",
			layoutdir: '<%= dirs.src %>/layouts/',
			partials: ['<%= dirs.src %>/partials/**/*.hbs'],
			production: false,
			assets: '<%= dirs.dest %>/assets',
			data: ['<%= dirs.src %>/data/*.json','<%= dirs.src %>/data/*.yml'],

			 // Metadata
			pkg: '<%= pkg %>',
			site: '<%= site %>'
		},

		pages: {
			expand: true, // necessary for cwd
			cwd: '<%= dirs.src %>',
			src: ['**/*.md', '**/*.hbs', '!partials/**', '!layouts/**'],
			dest: 'static',
			options: {
				// ext: '.php'
			}
		}
	});

	grunt.loadNpmTasks('assemble');

};
