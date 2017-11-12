const  gulp          = require('gulp');
const  notify        = require('gulp-notify');
const  source        = require('vinyl-source-stream');
const  browserify    = require('browserify');
const  babelify      = require('babelify');
const  ngAnnotate    = require('browserify-ngannotate');
const  browserSync   = require('browser-sync').create();
const  rename        = require('gulp-rename');
const  templateCache = require('gulp-angular-templatecache');
const  uglify        = require('gulp-uglify');
const  merge         = require('merge-stream');
const  inject        = require('gulp-inject');
const  sass          = require('gulp-sass');
const  plumber       = require('gulp-plumber');
const  concat        = require('gulp-concat');
const  cleanCSS      = require('gulp-clean-css');
const  gulpSequence = require('gulp-sequence');
const  del           = require('del');
// file locations
const  jsFiles   = "src/js/**/*.js";
const  viewFiles = "src/js/**/*.html";
const  sassFiles= "./src/sass/index.sass";
const  jsonFile="src/mock/*.json";
const  indexHtml="./build/index.html";
const  listOfItem=['./build/*.css'];

// let interceptErrors = (error) =>{
// let args = Array.prototype.slice.call(arguments);
 
//   notify.onError({
//     title: 'Compile Error',
//     message: '<%= error.message %>'
//   }).apply(this, args);
//   this.emit('end');
// };
gulp.task('clean', () => del('./build/'));
gulp.task('html', ()=> {
  return gulp.src("src/index.html")
      //.on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});

gulp.task('sasstocss', ()=> {
    return gulp.src(sassFiles)
     .pipe(plumber())
     .pipe(sass().on('error', sass.logError))
     .pipe(concat('index.css'))
     .pipe(gulp.dest('./build/'));
});

gulp.task('injectfile',()=>{
  const target= gulp.src(indexHtml);
  const source= gulp.src(listOfItem,{read:false},{relative: true});
 return target.pipe(inject(source)).pipe(gulp.dest('./build'));
 });

 gulp.task('json', ()=> {
  return gulp.src(jsonFile)
      //.on('error', interceptErrors)
      .pipe(gulp.dest('./build/'));
});


gulp.task('browserify', ['views'], ()=> {
  return browserify('./src/js/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
     // .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest('./build/'));
});


gulp.task('views', ()=> {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
     // .on('error', interceptErrors)
      .pipe(rename("app.templates.js"))
      .pipe(gulp.dest('./src/js/config/'));
});
gulp.task('build', ['html', 'browserify','sasstocss'], ()=> {
  const html = gulp.src("build/index.html")
                 .pipe(gulp.dest('./dist/'));

  const js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest('./dist/'));
  const css = gulp.src("build/index.css")
               .pipe(gulp.dest('./dist/'));

  return merge(html,js,css);
});
gulp.task('sequence', gulpSequence(['html', 'sasstocss'],['injectfile', 'json'], 'views'));
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
