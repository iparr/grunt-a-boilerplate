module.exports = function(grunt) {

	grunt.config('notify', {
		sass: {
			options: {
				title: 'Grunt: Sass',
				message: 'CSS generated successfully'
			}
		},
		concat: {
			options: {
				title: 'Grunt: JS',
				message: 'JS concat successful'
			}
		},
		modernizr: {
			options: {
				title: 'Modernizr prep',
				message: 'Custom Modernizr generated'
			}
		},
		rebuild: {
			options: {
				message: 'Everything rebuilt'
			}
		}
	});

	grunt.loadNpmTasks('grunt-notify');

};
