import { BaseProps } from '../../atom/interface/BaseProps.types';
import { ILPConfiguration } from 'litepicker/dist/types/interfaces';
export interface Range {
    startDate: number;
    endDate: number;
    number: number;
    isCurrent: boolean;
}
export interface Holiday {
    calendarDate: number;
    year: number;
    weekNumber: number;
    dayOfWeekNumber: number;
    period: number;
    quarter: number;
}
export interface Interval<T> {
    year: number;
    timelinesSummary: T[];
}
export interface Timeline {
    period: Interval<Range>[];
    week: Interval<Range>[];
    quarter: Interval<Range>[];
    holidays?: Interval<Holiday>[];
}
export interface DatePickerProps extends BaseProps {
    value?: Date[];
    name?: string;
    range?: boolean;
    minYear?: number;
    timeline?: Timeline;
    onChange?(_: Date[]): void;
    dateFormat?: string;
    iconPosition?: 'left' | 'right';
    highlightedDays?: (string | Date)[];
    minDate?: string | Date;
    maxDate?: string | Date;
    disabled?: boolean;
    placeholder?: string;
    configuration?: Partial<ILPConfiguration>;
    className?: string;
}
