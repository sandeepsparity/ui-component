import Litepicker from 'litepicker';
import '../../../tailwind.css';
import { Timeline } from '../DatePicker.types';
type TimelineProps = {
    timeline: Timeline;
    onSelected(startDate?: Date, endDate?: Date): void;
};
declare const _default: (props: TimelineProps) => {
    init: (picker: Litepicker) => void;
};
export default _default;
