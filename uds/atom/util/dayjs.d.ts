import dayjs from 'dayjs';
import 'dayjs/plugin/dayOfYear';
import 'dayjs/plugin/isLeapYear';
import 'dayjs/plugin/isoWeeksInYear';
import 'dayjs/plugin/quarterOfYear';
import 'dayjs/plugin/weekOfYear';
export declare const weeksInCurrentYear: () => number;
export declare const currentWeek: () => number;
export declare const currentQuarter: () => number;
export declare const weekRange: (week: number) => [Date, Date];
export declare const periodRange: (period: number) => [Date, Date];
export declare const quarterRange: (quarter: number) => [Date, Date];
export default dayjs;
