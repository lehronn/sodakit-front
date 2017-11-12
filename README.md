# sodakit front
version 0.5


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
Use `gulp` to list all new or modified files that haven't yet been committed.

Use `gulp watch` to list all new or modified files that haven't yet been committed.

Use `gulp imagemin` to list all new or modified files that haven't yet been committed.

Use `gulp build` run all gulp tasks to build without watching changes.

All possibly command:
`gulp` for default task, just build + watch task
`gulp` html for pug building and concatenation to html
`gulp css` for sass building
`gulp babel` for EcmaScript building
`gulp lint` for JS linting with eslint
`gulp imagemin` for image optimalizing
`gulp watch` for watch changes only
`gulp build` to run all building proces without watching changes

Good to know: index.pug is site container for meta-tags, create structure, linking css and libs. File main.pug is content of site.

## to do
Things to do:
- [ ] add uglify task
- [ ] npm tasking
- [ ] *maybe* browserify task
- [ ] *maybe* linter should be before babel?

## issue and bugs
nothing to report.

## information & contact
This boilerplate was built using [GitHub Pages](https://pages.github.com/).

