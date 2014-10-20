# Grunt-a-boilerplate

**branch**: `wordpress-kit`

The intention of this branch is to provide a base for the development of front-end assets for *WordPress* themes.

This is not a starter theme, use [*underscores*](https://github.com/automattic/_s) for that. Unless they've turned it into a Sass framework of course.


## Setting up for your WordPress theme

* Change the name of the `themename` directory in `html/wp-content/themes/` to the name of your theme
* Edit `.gitignore` and change all references to this as well
* Edit the path in `dirs:dest`

Your FE assets should now be compiled in the 'right' place.


## Getting started

1. Have Grunt, npm, Sass (3.3+)
2. `git clone` this repo
3. `npm i` - will install all necessary Grunt toys
4. `bower update` - install all 3rd party libraries (important for CSS generation w/ Sass). Normalize is included by default
5. `grunt prep` - prepares a custom Modernizr build. Need only be run once at start of project, or whenever a new Modernizr test is required.
6. `grunt` - This will run in development mode, i.e. css mapping, expanded output of css. Hopefully Grunt will compile the `build/assets/main.css` file and "*Done, without errors*" 


## Updating when new 3rd party tools/packages have been added

Things looking a bit odd? Try this:

1. `npm i` - this update any Grunt plug-ins that may have been added
2. `bower update` - this will look for any new 3rd party libraries
3. `grunt prep` - Maybe the website is now dependant on additional Modernizr tests? Lets regenerate Modernizr just in case.
4. `grunt` - Re-running this will regenerate your JS and CSS, hopefully with all the new toys included
