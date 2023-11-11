type OperatingSystem = 'unknown' | 'windows' | 'mac';
type Browser = 'unknown' | 'chrome' | 'firefox' | 'safari' | 'opera' | 'msie';
type Platform = {
    os: OperatingSystem;
    browser: Browser;
    platform: string;
};
export declare const getPlatform: () => Platform;
export {};
