import React, { ReactElement } from 'react';
interface MenuNode {
    id: string;
    depth: number;
    parent?: MenuItem;
    icon?: ReactElement;
    label?: string;
}
export interface MenuButton extends MenuNode {
    type: 'MenuButton';
    favorite: boolean;
    default: boolean;
    onClick?(): void;
}
export type MenuItem = MenuButton | MenuList;
export interface MenuList extends MenuNode {
    type: 'MenuList';
    isSubMenu: boolean;
    menu?: MenuItem[];
}
export type Menu = {
    id: string;
    icon?: ReactElement;
    label?: string;
    favorite?: boolean;
    default?: boolean;
    onClick?(): void;
    menu?: never;
} | {
    id: string;
    icon?: ReactElement;
    label?: string;
    favorite?: never;
    default?: never;
    onClick?: never;
    menu?: Menu[];
};
declare const useMenu: (_menu: Menu[]) => {
    menu: MenuItem[];
    favorites: MenuItem[];
    find: (id?: string) => MenuItem | undefined;
    lookup: (id?: string) => Menu | undefined;
    select: React.Dispatch<React.SetStateAction<string>>;
    selected: MenuItem | undefined;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
};
export default useMenu;
