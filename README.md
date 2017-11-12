# sodakit front
version 1.0.0

## description & features
Main features:
- gulp.
- pug, sass and babel, no more old stuff.
- optymialize images with imagemin.
- minimalize html and css.
- sources map for css and js.
- configurated and ready eslint with flexible configfile.
- linked bootstrap4, awesome icons, jquery, popper.
- concatenation pug and sass files.
- ready to go bootstrap4 demo.
- linked bootstrap, awesome icons, jquery.

## instalation instruction
1. Choose version sodakit (front, react or back) and copy from github repositories.
2. In root catalog use `npm install` with terminal to install all dependencies
3. Edit package.json and gulpfile as You wish.
   - Remember, Pug task in Gulp is configurated to process only one file -> dev/html/index.pug, if You want, change it to all html catalog or create object/array of files if You need.
4. Use `gulp build` in terminal to run all gulp tasks to build without watching changes.
5. All is finished, You can work now.

## gulp instruction
All possibly command:
`gulp` for default task, just build + watch task
`gulp html` for pug building and concatenation to html
`gulp css` for sass building
`gulp js` for js building with eslint, babel end sources map
`gulp imagemin` for image optimalizing
`gulp watch` for watch changes only
`gulp build` to run all building proces without watching changes

Good to know #1: `gulp watch` processes changed files so before You use `gulp watch` You have to build project with `gulp build`.

Good to know #2: index.pug is site container for meta-tags, create structure, linking css and libs. File main.pug is content of site.

### file structure
./
  dev - development version of Your project
  |  docs - documentation of Your project catalog
  |  html - pug files
  |  images - images catalog
  |  others - others sources files like vectors, rastrers, PSD files etc.
  |  scripts - javascript files catalog
  |  styles - sass files catalog
  dist - project ready for distribution
  node_modules - node.js modules catalog
  .git - git repos catalog, if You use
  gulpfile.js - gulp tasks configuration file
  package.json - npm package meta file for Your project
  README.mn - You read this now
  .eslintrc - eslint configuration file
  .gitignore - ignore configuration file for git

## to do
Things to do in future:
- [ ] what about babel polyfill?
- [ ] *maybe* browserify task

## issue and bugs
please report in github.

## information & contact
This boilerplate was served using [GitHub](https://github.com/).

