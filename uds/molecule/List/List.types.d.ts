import { ReactElement } from 'react';
import { ListItemProps } from './ListItem/ListItem.types';
import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface ListProps extends BaseProps {
    children?: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
    className?: string;
}
