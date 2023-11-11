export declare const isEmptyArray: (obj: any) => boolean;
export declare const intersperse: <T, U>(x: T, xs?: U[]) => (T | U)[];
export declare const partition: <T>(xs: T[], predicate: (_: T) => boolean) => [T[], T[]];
export declare const range: (end: number, startAt?: number) => number[];
export declare const sort: <T>(xs?: T[], sorts?: {
    key: keyof T;
    asc: boolean;
}[]) => T[];
export declare const unique: <T>(items: T[], key?: string) => T[];
