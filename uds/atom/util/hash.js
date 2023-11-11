import { SHA1, enc } from 'crypto-js';

var sha1 = function (input) {
    if (input === void 0) { input = ''; }
    var data = typeof input === 'object' ? JSON.stringify(input) : input;
    return SHA1(data).toString(enc.Hex).toUpperCase();
};

export { sha1 };
