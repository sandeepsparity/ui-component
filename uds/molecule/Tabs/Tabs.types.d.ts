import { ReactElement } from 'react';
import { TabProps } from './Tab/Tab.types';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface TabsProps extends BaseProps {
    initialTab?: number;
    collapsed?: boolean;
    transparent?: boolean;
    onChange?(_: number): void;
    hideDividers?: boolean;
    children?: ReactElement<TabProps> | ReactElement<TabProps>[];
    className?: string;
    variant?: 'light' | 'dark';
    hideBorder?: boolean;
}
