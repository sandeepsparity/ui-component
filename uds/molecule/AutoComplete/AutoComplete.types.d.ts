export type AutoCompleteProps<T> = {
    className?: string;
    placeholder?: string;
    suggestions: T[] | ((_: string) => Promise<T[]>);
    multiple?: boolean;
    label?: string;
    onChange?(_: T[] | T): void;
    disabled?: boolean;
    notFoundText?: string;
    isRequired?: boolean;
    suggestionKey?: string;
    width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    value?: T | T[];
    size?: 'sm' | 'md' | 'lg';
    error?: boolean;
};
export type AutoCompleteRefProps = {
    forceUpdate: () => void;
};
