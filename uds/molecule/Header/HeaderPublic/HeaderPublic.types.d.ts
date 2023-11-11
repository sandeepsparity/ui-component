import { ReactNode } from 'react';
import { BaseProps } from '../../../atom/interface/BaseProps.types';
export interface HeaderPublicProps extends BaseProps {
    children?: ReactNode;
    className?: string;
}
