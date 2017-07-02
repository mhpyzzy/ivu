var gulp = require('gulp'), //本地安装gulp所用到的地方
    rename=require('gulp-rename'),
    sass = require('gulp-sass');


gulp.task('scss', function () {
    
   return gulp.src('src/style/ivu.scss') //该任务针对的文件
        .pipe(sass().on('error', sass.logError)) //该任务调用的模块
        .pipe(rename('ivu.css'))
        .pipe(gulp.dest('src/style/')); //将会在src/css下生成index.css
});

gulp.task('watch', function(){
  gulp.watch('src/style/**/*.scss', ['scss']); 
  // Other watchers
})