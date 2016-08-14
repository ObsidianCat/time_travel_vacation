
import gulp from 'gulp';
import {tasks} from './client/const';

gulp.task('default', [tasks.CLIENT_WATCH]);
gulp.task('create_css',[tasks.CLIENT_SASS_TO_CSS]);
require('require-dir')('client');


require('require-dir')('server');

