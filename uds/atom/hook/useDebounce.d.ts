declare const useDebounce: (fn: (...args: any) => void, timeout?: number) => (...args: any) => () => void;
export default useDebounce;
