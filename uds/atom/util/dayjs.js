import dayjs from 'dayjs';
export { default } from 'dayjs';
import 'dayjs/plugin/dayOfYear';
import 'dayjs/plugin/isLeapYear';
import 'dayjs/plugin/isoWeeksInYear';
import 'dayjs/plugin/quarterOfYear';
import 'dayjs/plugin/weekOfYear';

/* istanbul ignore file */
dayjs.extend(require('dayjs/plugin/dayOfYear'));
dayjs.extend(require('dayjs/plugin/isLeapYear'));
dayjs.extend(require('dayjs/plugin/isoWeeksInYear'));
dayjs.extend(require('dayjs/plugin/quarterOfYear'));
dayjs.extend(require('dayjs/plugin/weekOfYear'));
