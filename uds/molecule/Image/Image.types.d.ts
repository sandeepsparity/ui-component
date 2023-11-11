import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface ImageProps extends BaseProps {
    src?: string;
    alt?: string;
    variant?: 'circle' | 'square';
    size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    height?: number;
    width?: number;
    faded?: boolean;
    selectable?: boolean;
    isSelected?: boolean;
    showSelectIcon?: boolean;
    iconDiameter?: number;
    onClick?(_?: boolean): void;
    className?: string;
    hideBorder?: boolean;
    borderWidth?: string;
    backgroundImage?: string;
    borderImage?: string;
}
