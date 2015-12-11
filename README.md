# userscript-browserify-boilerplate

This is a good starting point for userscript development.
It uses [browserify](http://browserify.org/) to enable the use of modules ([CommonJS](http://requirejs.org/docs/commonjs.html)),
ES6 ([BabelJS](https://babeljs.io/)) and file inlining ([brfs](https://github.com/substack/brfs)) right of the bat.

## Requirements

* NodeJS
* NPM

## Install

1. Clone this repository
>git clone "https://github.com/thevtm/userscript-browserify-boilerplate.git" "your-directory"

2. Run configure to set it up
>./configure

3. Install node modules
>npm install

## Configure

Configuration is done through the *package.json* and *gulpfile.js*.

## Workflow

Development build
>npm run build

Production build
>npm run build-prod

Compile development on file change.
>npm run watch

[Live reloading tutorial (/dev/loadlocal.user.js).](https://forum.tampermonkey.net/viewtopic.php?p=1832#p1832)



## Modules

### browserify

Bundle the modules into a single script.
[More info.](http://browserify.org/)

#### browserify-shim

Shim the modules already included as a external resource.
[More info.](https://github.com/thlorenz/browserify-shim)

### BabelJS / babelify

Enable the use of ES6/ES7.
[More info.](https://babeljs.io/)

### brfs

Used for inlining files, commonly used for CSS stylesheets and HTML files.
[More info.](https://github.com/substack/brfs)
