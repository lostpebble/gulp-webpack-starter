gulp-webpack-starter
====================

A starter project for using Gulp (for styles, images, devserver etc.) and Webpack (for scripts) to compile and watch a project.

(With a touch of React filler in this case) - just example scripts, replace with whatever .js you like.

### Checks

Make sure `src/js/index.js` is the entry for your javascript files. Use the CommonJS / node syntax `require('...')` from there to build your scripts.

### Output

Webpack compiles your javascript to `public/js/bundle.js`

Scripts, using SASS, are compiled to `public/stylesheets/styles.css` and minified to `styles.min.css`

### Running gulp to make it all work

clean folders, compile scripts, images and styles and then continue to watch them for changes:

`gulp`

start a dev server, also detects any changes to the public folder and reloads the page for you

`gulp liveserver`

=======================

Look inside `gulp/tasks/` for more info on the separate tasks.