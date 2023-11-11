declare const useProgress: (delay?: number) => {
    progress: number;
    start: () => void;
    clear: () => void;
};
export default useProgress;
