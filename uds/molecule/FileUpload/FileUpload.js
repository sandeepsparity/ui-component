import React, { useState } from 'react';
import '../../tailwind.css.js';
import { FileImage, FileUp } from 'lucide-react';
import 'tslib';
import { color } from '../../atom/util/colors.js';
import '../../atom/util/dayjs.js';
import 'react-dom/client';

var FileUpload = function (props) {
    var _a = useState(false), showMultipleFileErrorMessage = _a[0], setShowMultipleFileErrorMessage = _a[1];
    var className = props.className, _b = props.width, width = _b === void 0 ? 928 : _b, allowedExtensions = props.allowedExtensions, onFileUpload = props.onFileUpload, _c = props.multiple, multiple = _c === void 0 ? true : _c;
    var handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setShowMultipleFileErrorMessage(false);
    };
    var getDescriptionText = function () {
        if (allowedExtensions && allowedExtensions.length > 0) {
            var extensionString_1 = '';
            allowedExtensions.forEach(function (item, index) {
                extensionString_1 += ".".concat(item);
                if (index !== allowedExtensions.length - 1) {
                    extensionString_1 += ", ";
                }
            });
            return "Only ".concat(extensionString_1, " files are allowed");
        }
        else {
            return 'All files are allowed';
        }
    };
    var getExtensions = function () {
        if (allowedExtensions && allowedExtensions.length > 0) {
            var extensionString_2 = '';
            allowedExtensions.forEach(function (item, index) {
                if (item === 'doc' || item === 'docx') {
                    extensionString_2 += ".".concat(item);
                }
                else if (item === 'xls' || item === 'xlsx') {
                    extensionString_2 += ".".concat(item);
                }
                else if (item === 'pdf') {
                    extensionString_2 += "application/".concat(item);
                }
                else {
                    extensionString_2 += "image/".concat(item);
                }
                if (index !== allowedExtensions.length - 1) {
                    extensionString_2 += ",";
                }
            });
            return extensionString_2;
        }
        else {
            return 'all';
        }
    };
    var getDropExtensions = function () {
        if (allowedExtensions && allowedExtensions.length > 0) {
            var extensionString_3 = '';
            allowedExtensions.forEach(function (item, index) {
                if (item === 'doc' || item === 'docx') {
                    extensionString_3 += "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                }
                else if (item === 'xls' || item === 'xlsx') {
                    extensionString_3 += "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                }
                else if (item === 'pdf') {
                    extensionString_3 += "application/".concat(item);
                }
                else {
                    extensionString_3 += "image/".concat(item);
                }
                if (index !== allowedExtensions.length - 1) {
                    extensionString_3 += ",";
                }
            });
            return extensionString_3;
        }
        else {
            return 'all';
        }
    };
    var handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!multiple && e.dataTransfer.files.length > 1) {
            setShowMultipleFileErrorMessage(true);
        }
        else if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            var newFileArray = [];
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
                if (getDropExtensions().split(',').includes(e.dataTransfer.files[i].type)) {
                    newFileArray.push(e.dataTransfer.files[i]);
                }
            }
            onFileUpload(newFileArray);
        }
    };
    var handleChange = function (e) {
        var _a;
        e.preventDefault();
        if ((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]) {
            onFileUpload(e.target.files);
        }
    };
    var widthStyle = function () {
        return "".concat(width, "px");
    };
    return (React.createElement("div", { className: className, style: { width: widthStyle() } },
        React.createElement("input", { className: 'hidden', onChange: handleChange, type: 'file', id: 'input-file-upload', "data-testid": 'input-file-upload', multiple: multiple, accept: getExtensions() }),
        React.createElement("div", { className: "bg-blue-307 border-2 border-dashed border-brand-light flex" },
            React.createElement("label", { id: 'label-file-upload', "data-testid": 'label-file-upload', onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDrag, onDrop: handleDrop, htmlFor: 'input-file-upload', className: 'bg-blue-50 w-full flex flex-col justify-center items-center text-light-text py-[32px] cursor-pointer' },
                React.createElement("div", { className: 'flex flex-row' },
                    React.createElement("span", { className: 'pt-[5px] mr-[-10px] z-[1]' },
                        React.createElement(FileImage, { size: 20, stroke: color('light-text'), fill: color('blue-307'), strokeWidth: 2, className: 'min-w-[24px] min-h-[24px] ' })),
                    React.createElement("span", null,
                        React.createElement(FileUp, { size: 20, stroke: color('light-text'), fill: color('blue-307'), strokeWidth: 2, className: 'min-w-[24px] min-h-[24px]' }))),
                React.createElement("span", { className: 'text-base leading-5 font-normal' },
                    "Drag and drop or ",
                    React.createElement("span", { className: 'text-blue-brand-500 ' }, "browse")),
                React.createElement("span", { className: 'text-sm leading-4 italic font-normal' }, getDescriptionText()))),
        showMultipleFileErrorMessage && (React.createElement("div", { className: 'text-error text-sm leading-4 font-normal mt-[8px] text-left' }, "Multiple files are not allowed"))));
};

export { FileUpload as default };
