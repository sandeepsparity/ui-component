import { ReactElement } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
import { ButtonProps } from '../Button.types';
export interface ButtonGroupProps extends BaseProps {
    value?: number;
    onChange?(_: number): void;
    variant?: 'primary' | 'secondary';
    children?: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
    className?: string;
    clazz?: string;
}
