import React from 'react';
import Pagination from '../../../Pagination/Pagination.js';
import Select from '../../../Select/Select.js';
import clsx from 'clsx';
import '../../../../tailwind.css.js';

var Footer = function (props) {
    var pageSizes = props.pageSizes || [10, 25, 50, 100];
    return (React.createElement("div", { className: clsx('flex items-center justify-between h-[56px]', props.className) },
        React.createElement("div", { className: 'flex items-center w-fit' },
            React.createElement("span", { className: 'text-dark-text leading-6 select-none whitespace-nowrap' }, props.label || 'Rows:'),
            React.createElement(Select, { className: 'w-[76px] mx-2', size: 'sm', items: pageSizes, value: props.pagination.size, onChange: props.pagination.setSize }),
            React.createElement("span", { className: 'text-dark-text leading-6 select-none whitespace-nowrap' }, "".concat(props.pagination.start, "-").concat(props.pagination.end)),
            !!props.pagination.count && (React.createElement("span", { className: 'text-dark-text leading-6 select-none whitespace-nowrap' },
                "\u00A0", "of ".concat(props.pagination.count)))),
        React.createElement(Pagination, { jumper: props.jumper, showButtons: props.showButtons, showIconButtons: props.showIconButtons, page: props.pagination.page, pages: props.pagination.pages, onChange: props.pagination.setPage })));
};

export { Footer as default };
