import { ReactElement } from 'react';
import { TabProps } from './Tab/Tab.types';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface TabBarProps extends BaseProps {
    selected?: number;
    onChange?(_: number): void;
    children?: ReactElement<TabProps> | ReactElement<TabProps>[];
    className?: string;
    hideBorder?: boolean;
}
