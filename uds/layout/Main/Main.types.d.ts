import { ReactNode } from 'react';
import { Menu } from '../../molecule/Sidebar/Sidebar.types';
import { Link } from '../../molecule/Footer/Footer.types';
export interface HeaderProps {
    children?: ReactNode;
}
export interface ContentProps {
    children?: ReactNode;
}
export interface MainProps {
    title?: string;
    subtitle?: string;
    heading?: string;
    timeout?: Date;
    links?: Link[];
    menu?: Menu[];
    selected?: string | Menu;
    scrollbar?: boolean;
    pinned?: boolean;
    stickyFooter?: boolean;
    onChange?(_: boolean): void;
    onSelect?(_?: Menu): void;
    onPin?(_: boolean): void;
    children?: ReactNode;
    className?: string;
    transitionDuration?: string;
}
