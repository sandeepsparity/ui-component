import React from 'react';
import ProgressCircle from '../../ProgressCircle/ProgressCircle.js';
import { File, CheckCircle2, AlertTriangle, Trash2, Download, Eye, FileSymlink } from 'lucide-react';
import 'tslib';
import { color } from '../../../atom/util/colors.js';
import '../../../atom/util/dayjs.js';
import 'react-dom/client';

var FileUploadStatus = function (props) {
    var id = props.id, className = props.className, fileName = props.fileName, imageUrl = props.imageUrl, fileSize = props.fileSize, uploadStatus = props.uploadStatus, _a = props.width, width = _a === void 0 ? 928 : _a, fileType = props.fileType, onReplace = props.onReplace, onDelete = props.onDelete, onActionButton = props.onActionButton, onDownload = props.onDownload, _b = props.errorMessage, errorMessage = _b === void 0 ? undefined : _b, _c = props.showProgress, showProgress = _c === void 0 ? false : _c;
    var widthStyle = function () {
        return "".concat(width, "px");
    };
    var isExisting = uploadStatus === 'uploaded' || uploadStatus === 'replace';
    var borderStyle = uploadStatus === 'failed' || uploadStatus === 'replace'
        ? 'border-2 border-solid border-error'
        : 'border border-solid border-gray-204';
    var isImage = fileType.startsWith('image');
    var statusMsg = uploadStatus === 'success' ? 'View' : uploadStatus === 'failed' ? 'Try Again' : null;
    var customClass = className
        ? className
        : "w-full flex flex-row items-center justify-between mt-[20px] ".concat(borderStyle, " rounded-lg h-fit min-h-[98px]");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: customClass, style: { width: widthStyle() } },
            React.createElement("div", { className: 'flex flex-row items-center' },
                React.createElement("div", { className: 'pl-6 pr-4' }, isImage ? (React.createElement("img", { src: imageUrl, className: 'w-[50px]' })) : (React.createElement("div", { className: 'flex rounded-[50%] bg-blue-307 w-[50px] h-[50px] justify-center items-center' },
                    React.createElement(File, { size: 20, stroke: color('light-text'), strokeWidth: 2, className: 'min-w-[20px] min-h-[20px] ' })))),
                React.createElement("div", { className: 'flex flex-col items-start' },
                    React.createElement("div", { className: 'text-base leading-5 text-dark-text-201' },
                        React.createElement("span", null, fileName),
                        statusMsg && onActionButton && (React.createElement("button", { onClick: function () { return onActionButton(id); }, className: 'pl-[5px] font-semibold text-base text-brand leading-5', "data-testid": 'actionBtn' }, statusMsg))),
                    !isExisting && (React.createElement("span", { className: 'text-sm leading-4 text-light-text' },
                        fileSize,
                        " MB")))),
            React.createElement("div", { className: 'flex flex-row' },
                uploadStatus === 'success' && (React.createElement(CheckCircle2, { size: 20, stroke: color('success'), strokeWidth: 2, className: 'min-w-[16px] min-h-[16px] ' })),
                showProgress && uploadStatus === 'inProgress' && (React.createElement(ProgressCircle, { circleWidth: 48, progressPercentage: 25, strokeWidth: 5, secondaryColor: color('blue-brand-100'), primaryColor: color('blue-brand-400'), textSize: 12, hidePercentage: false, textColor: color('light-text') })),
                uploadStatus === 'failed' && (React.createElement(AlertTriangle, { size: 20, stroke: color('error'), strokeWidth: 2, className: 'min-w-[16px] min-h-[16px] ' })),
                !isExisting && onDelete && (React.createElement("button", { onClick: function () { return onDelete(id); }, "data-testid": 'deleteBtn' },
                    React.createElement(Trash2, { size: 20, stroke: color('light-text'), strokeWidth: 2, className: 'min-w-[16px] min-h-[16px] mx-[30px]' }))),
                uploadStatus === 'uploaded' && onDownload && (React.createElement("button", { onClick: function (e) { return onDownload(id); }, className: 'flex flex-row', "data-testid": 'downloadBtn' },
                    React.createElement(Download, { size: 20, stroke: color('brand'), strokeWidth: 2, className: 'min-w-[16px] min-h-[16px]' }),
                    React.createElement("span", { className: 'font-semibold text-base text-brand mx-[12px]' }, "Download"))),
                uploadStatus === 'replace' && onActionButton && (React.createElement(React.Fragment, null,
                    React.createElement("button", { onClick: function () { return onActionButton(id); }, className: 'flex flex-row' },
                        React.createElement(Eye, { size: 20, stroke: color('brand'), strokeWidth: 2, className: 'min-w-[16px] min-h-[16px]' }),
                        React.createElement("span", { className: 'font-semibold text-base text-brand mx-[12px]' }, "View")),
                    onReplace && (React.createElement("button", { onClick: function () { return onReplace(id); }, className: 'flex flex-row', "data-testid": 'replaceBtn' },
                        React.createElement(FileSymlink, { size: 20, stroke: color('error'), strokeWidth: 2, className: 'min-w-[16px] min-h-[16px]' }),
                        React.createElement("span", { className: 'font-semibold text-base text-error mx-[12px]' }, "Replace"))))))),
        errorMessage && React.createElement("div", { className: 'text-error text-sm leading-4 font-normal mt-[8px] text-left' }, errorMessage)));
};

export { FileUploadStatus as default };
