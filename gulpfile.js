var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');
var inject        = require('gulp-inject');
var sass          = require('gulp-sass');
var del           = require('del');
var plumber       = require('gulp-plumber');
var concat        = require('gulp-concat');
var cleanCSS      = require('gulp-clean-css');

// file locations
var jsFiles   = "src/js/**/*.js";
var viewFiles = "src/js/**/*.html";
var sassFiles= "./src/sass/index.sass";
var jsonFile="src/mock/*.json";
var indexHtml="./src/index.html";
var listOfItem=['*.css'];

let interceptErrors = (error) =>{
let args = Array.prototype.slice.call(arguments);
 
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
};
gulp.task('clean:css', () => del('./build'));
gulp.task('clean:Js', () => del('./build'));

gulp.task('injectfile',()=>{
    let target= gulp.src(indexHtml);
    let source= gulp.src(listOfItem,{read:false});
   return target.pipe(inject(source)).pipe(gulp.dest('./build/'));
   });

gulp.task('sasstocss', ()=> {
    return gulp.src(sassFiles)
     .pipe(plumber())
     .pipe(sass().on('error', sass.logError))
     .pipe(concat('index.css'))
     .pipe(cleanCSS({
            compatibility: 'ie10'
        }))
     .pipe(gulp.dest('./build/'));
});

gulp.task('browserify', ['views'], ()=> {
  return browserify('./src/js/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/'));
});

gulp.task('json', ()=> {
  return gulp.src(jsonFile)
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('html', ()=> {
  return gulp.src("src/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('views', ()=> {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename("app.templates.js"))
      .pipe(gulp.dest('./src/js/config/'));
});

gulp.task('build', ['html', 'browserify','sasstocss'], ()=> {
  let html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  let js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));
  let css = gulp.src("build/index.css")
               .pipe(gulp.dest('./dist/'));

  return merge(html,js,css);
});

gulp.task('default', ['html', 'browserify'], ()=> {

  browserSync.init(['./build/**/**.**'], {
    server: "./build",
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  });

  gulp.watch("src/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(jsonFile,['json']);
  gulp.watch(sassFiles,['sasstocss']);
  gulp.watch(jsFiles, ['browserify']);
});
