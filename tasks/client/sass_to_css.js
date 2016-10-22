/**
 * Created by Lula on 8/14/2016.
 */
import gulp from 'gulp';
import {path, tasks} from './const';
import sass from 'gulp-sass';

const STYLES_SOURCE = path.DEV + path.APP_NAME+'/styles/scss/**/*.scss';
const STYLES_DESTINATION = path.DEV + path.APP_NAME+'/styles/css/';

gulp.task(tasks.CLIENT_SASS_TO_CSS, function() {
  console.log(STYLES_SOURCE, STYLES_DESTINATION);
  return gulp.src(STYLES_SOURCE)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(STYLES_DESTINATION));
});
