export declare const toMap: <T>(key: keyof T | ((_: T) => string | number)) => (_: {
    [key: string]: T;
    [key: number]: T;
}, __: T) => {
    [key: string]: T;
    [key: number]: T;
};
export declare const groupBy: <T>(key: keyof T | ((_: T) => string | number)) => (_: {
    [key: string]: T[];
    [key: number]: T[];
}, __: T) => {
    [key: string]: T[];
    [key: number]: T[];
};
export declare const partition: <T>(predicate: (_: T) => boolean) => (_: [T[], T[]], __: T) => [T[], T[]];
