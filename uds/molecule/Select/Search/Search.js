import React, { forwardRef, useState } from 'react';
import { Search as Search$1, XCircle } from 'lucide-react';
import clsx from 'clsx';
import '../../../tailwind.css.js';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';
import useDebounce from '../../../atom/hook/useDebounce.js';

var Search = forwardRef(function (props, ref) {
    var _a = useState(''), query = _a[0], setQuery = _a[1];
    var search = useDebounce(props.onSearch || (function (_) { return ({}); }), 200);
    var onChange = function (event) {
        var _a, _b;
        var input = ((_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || '';
        setQuery(input);
        search(input);
    };
    var clear = function () {
        setQuery('');
        search('');
    };
    return (React.createElement("div", { ref: ref, className: clsx('flex items-center m-2 p-2 h-[40px] border border-gray-204 rounded truncate', props.className) },
        React.createElement(Search$1, { size: 18, strokeWidth: 1.5, color: color('light-text'), className: 'min-w-[18px] w-[18px]' }),
        React.createElement("input", { placeholder: 'Search', value: query, onChange: onChange, className: 'w-full h-[40px] mx-2 border-0 outline-0 bg-transparent placeholder:text-light-text placeholder:text-sm text-dark-text' }),
        !!query &&
            React.createElement(XCircle, { size: 18, strokeWidth: 1.5, color: color('light-text'), onClick: clear, className: 'min-w-[18px] w-[18px] rounded-full cursor-pointer hover:stroke-gray-203' })));
});

export { Search as default };
