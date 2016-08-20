import gulp from 'gulp';
import browserSync from 'browser-sync';
import {path, tasks} from './const';

const TS = path.DEV + '**/*.ts';
// const CSS = path.DEV + '**/*.css';
const SCSS = path.DEV + '**/*.scss';
const HTML = path.DEV + '**/*.html';

gulp.task(tasks.CLIENT_RELOAD, () => {
  return browserSync.reload();
});

gulp.task(tasks.CLIENT_WATCH, [tasks.CLIENT_BUILD_TS, tasks.CLIENT_SASS_TO_CSS], () => {

  browserSync({proxy: "http://localhost:3333", reloadDelay: 1000});


  let _watchable = [];

  _watchable.push(TS);
  // _watchable.push(CSS);
  _watchable.push(SCSS);
  _watchable.push(HTML);

  return gulp.watch(_watchable, [ tasks.CLIENT_SASS_TO_CSS,tasks.CLIENT_BUILD_TS, tasks.CLIENT_RELOAD]);
});
