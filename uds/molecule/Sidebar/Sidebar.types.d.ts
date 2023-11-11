import { BaseProps } from '../../atom/interface/BaseProps.types';
import { Menu as _Menu } from '../../atom/hook/useMenu';
export type Menu = _Menu;
export interface SidebarProps extends BaseProps {
    menu: Menu[];
    selected?: string | Menu;
    title?: string;
    pinned?: boolean;
    onChange?(_: boolean): void;
    onSelect?(_?: Menu): void;
    onPin?(_: boolean): void;
    className?: string;
    transitionDuration?: string;
}
