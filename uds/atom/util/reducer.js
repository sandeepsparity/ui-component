var toMap = function (key) {
    return function (accumulator, current) {
        var index = typeof key === 'function' ? key(current) : current[key];
        if (typeof index === 'string' || typeof index === 'number') {
            accumulator[index] = current;
        }
        return accumulator;
    };
};

export { toMap };
