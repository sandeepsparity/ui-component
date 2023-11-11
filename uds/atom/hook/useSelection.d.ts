declare const useSelection: <T>(_key: keyof T | ((_: T) => string | number)) => {
    selected: T[];
    select: (item: T | T[]) => void;
    deselect: (item: T | T[]) => void;
    isSelected: (item: T | T[]) => boolean;
    clear: () => void;
};
export default useSelection;
