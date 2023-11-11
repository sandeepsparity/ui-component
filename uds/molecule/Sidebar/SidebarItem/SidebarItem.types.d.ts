import { MenuItem } from '../../../atom/hook/useMenu';
import { ReactElement } from 'react';
export interface SidebarItemProps {
    menuItem: MenuItem;
    selected?: boolean;
    visible?: boolean;
    open?: boolean;
    onClick?(): void;
    children?: ReactElement<SidebarItemProps>[];
    className?: string;
}
