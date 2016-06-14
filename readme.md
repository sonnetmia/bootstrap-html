#Introduction
This is basic starter bootstrap HTML Template for Quick Start. I am writting this instruction for **windows** user. But it will work for other OS user like OSX or Linux based distro. I am using Bootstrap 3 for this project. 

##Getting Start
You first need to sure that you have ruby and node installed into your system. 
If not installed then, Install those program into your **windows** system. 
-[ruby](http://rubyinstaller.org/ "Ruby For windows")  For **windows**. 
-[NodeJS](https://nodejs.org/en/ "NodeJS")


##Init Project. 
Go to your project folder then  `shift + right click`  and open command prompt . Run these command one by one to start your very first project.

-`npm install --global gulp-cli`
-`npm install --save-dev gulp`
-`npm init`



==========================================
##Gulp Plugin's installation

Install some important gulp plugin (if not installed into your project) to enhance our project. 
Linux user may need to use `sudo`. 

-`npm install --save-dev gulp-uglify` 
-`npm install --save-dev gulp-autoprefixer`
-`npm install gulp-add-src --save-dev`
-`npm install gulp-sass --save-dev`
-`npm install gulp-compass --save-dev`
-`npm install --save-dev gulp-plumber`
-`npm install gulp-concat --save-dev`
-`npm install browser-sync --save-dev`


##Create gulp task 
First, Create `gulpfile.js` file into your project root directory. 

```js
var gulp = require('gulp');
gulp.task('default', function() {
  // place code for your default task here
});
```

##Usage 
Clone or download the repository from github. 
Enter your project folder and open command prompt then run `npm install` . All files and folder should be ready after creating project for the first time. 

Then watch the project by run  `gulp`. But if you need to run specific command then look it into the gulpfile.js. 

###You are always welcome to suggest me. So, please suggest me to make it more firendly. 


Thank you so much for using this package. 