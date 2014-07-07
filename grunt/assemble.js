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

			 // Metadata
			pkg: '<%= pkg %>',
			site: '<%= site %>'
		},

		pages: {
			expand: true, // necessary for cwd
			cwd: '<%= dirs.src %>',
			src: ['**/*.md', '**/*.hbs', '!partials/**', '!layouts/**', '!residential-developments/***'],
			dest: '<%= dirs.dest %>',
			options: {
				// ext: '.php'
			}
		},

		// A collection / post-type / whatever
		// Using 'residential developments' as an example here
		residential: {
			expand: true,
			cwd: '<%= dirs.src %>/residential-developments/',
			dest: '<%= dirs.dest %>/residential-developments/',
			src: ['**/*.md', '**/*.hbs'],
			// flatten: true,
			options: {
				layout: 'development.hbs'
			}
		}
	});

	grunt.loadNpmTasks('assemble');

};
