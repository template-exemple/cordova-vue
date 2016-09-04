
# Template : Cordova - Vue

This a base project for use cordova with vue.js (build with webpack).

[> Test it](https://template-exemple.github.io/cordova-vue/platforms/browser/www/)


## Installing
```sh
# Install Cordova (you may root privilege)
npm install -g cordova  
# Create cordova project
cordova create hello com.example.hello HelloWorld --template https://github.com/template-exemple/cordova-vue-webpack
# Install dependencies
npm install --dev
# Add browser platform
# (or other, but build script for dev use browser @see webpack.config.js,
# browser platform is more easy to test)
cordova platform add browser
```

## Build
| Build type                  | Command             |
| --------------------------- | ------------------- |
| Normal build                | `npm run build`     |
| Build without minimization  | `npm run build-dev` |
| Build on file change        | `npm run watch` _(don't work yet)_    |


## Todo
 - [x] Build with Webpack
 - [X] Fix load js too soon (failed on android)
 - [ ] Fix build via npm command (watch doesn't recompile cordova)
 - [ ] Add live-reload to update page after Cordova build (but on cordova server)
 - [X] Test with image
 - [ ] Use storage to keep data
 - [ ] Use specific device functionality such as gyroscope
