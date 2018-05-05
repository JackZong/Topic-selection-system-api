import gulp from 'gulp'
import path from 'path'
import gulpLoadPlugins from 'gulp-load-plugins'
const plugins = gulpLoadPlugins()
import runSequence from 'run-sequence'
const paths = {
	js: ['./**/*.js','!dist/**','!node_modules/**','!coverage/**','index.js']
}
gulp.task('default', function(){

  var watcher = gulp.watch(['*.js','./server/**/*.js','./config/**.js','./utils/*.js'],['babel'])
  watcher.on('change',function(e){
  	console.log('file' + e.path + ' was ' + e.type + ' running task')
  })
})
gulp.task('babel',() => {
	gulp.src([...paths.js,'!gulpfile.babel.js'],{ base: '.'})
	.pipe(plugins.babel())
	.pipe(gulp.dest('dist'))
})

