import { BaseProps } from '../../atom/interface/BaseProps.types';
export interface SpinnerProps extends BaseProps {
    size?: 'lg' | 'md' | 'sm' | 'xs';
    direction?: 'clockwise' | 'anti-clockwise';
    variant?: 'solid' | 'dotted' | 'gradient';
}
