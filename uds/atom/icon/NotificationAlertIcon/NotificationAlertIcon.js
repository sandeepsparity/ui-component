import React, { useState } from 'react';

var NotificationAlertIcon = function (props) {
    var _a = useState(false), hover = _a[0], setHover = _a[1];
    var width = props.width || 22;
    var height = props.height || 24;
    var fill = (hover ? props.fillAlt || props.fill : props.fill) || '#000';
    var accent = (hover ? props.accentAlt || props.accent : props.accent) || '#000';
    return (React.createElement("svg", { className: props.className, onMouseEnter: function () { return setHover(true); }, onMouseLeave: function () { return setHover(false); }, onClick: props.onClick, width: width, height: height, viewBox: '0 0 22 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        React.createElement("path", { d: 'M 10.935547 0.33398438 C 8.9726088 0.33398438 7.0911036 1.1139745 5.703125 2.5019531 C 4.3151464 3.8899317 3.5351562 5.771477 3.5351562 7.734375 C 3.5351562 11.321041 2.7676099 13.554023 2.0566406 14.857422 C 1.699771 15.511721 1.3506516 15.942519 1.1074219 16.199219 C 0.985543 16.327919 0.89073219 16.412038 0.83203125 16.460938 C 0.80433934 16.484043 0.78519677 16.500485 0.77539062 16.507812 L 0.7734375 16.507812 L 0.77148438 16.509766 C 0.77049402 16.510499 0.76816397 16.511288 0.76757812 16.511719 C 0.40863148 16.757919 0.25053425 17.209454 0.37695312 17.626953 C 0.504652 18.048753 0.89331982 18.335938 1.3339844 18.335938 L 20.537109 18.335938 C 20.977709 18.335938 21.366441 18.048753 21.494141 17.626953 C 21.62054 17.209454 21.462515 16.757919 21.103516 16.511719 C 21.102616 16.511019 21.101609 16.509312 21.099609 16.507812 C 21.090409 16.501013 21.070416 16.485437 21.041016 16.460938 C 20.982316 16.412038 20.885572 16.327919 20.763672 16.199219 C 20.520472 15.942519 20.171253 15.511721 19.814453 14.857422 C 19.439028 14.169195 19.049216 13.218083 18.763672 11.949219 A 6 6 0 0 1 18 12.003906 A 6 6 0 0 1 16.701172 11.845703 C 17.027021 13.548693 17.531599 14.848287 18.058594 15.814453 C 18.160294 16.000853 18.263834 16.174538 18.365234 16.335938 L 3.5078125 16.335938 C 3.6091524 16.174538 3.7108201 16.000853 3.8125 15.814453 C 4.7018191 14.184055 5.5351562 11.615741 5.5351562 7.734375 C 5.5351562 6.3019064 6.1042785 4.9289246 7.1171875 3.9160156 C 8.1300965 2.9031066 9.5030383 2.3339844 10.935547 2.3339844 C 11.641256 2.3339844 12.331546 2.4730977 12.972656 2.734375 A 6 6 0 0 1 14.421875 1.2050781 C 13.358975 0.6377699 12.162358 0.33398438 10.935547 0.33398438 z', fill: fill }),
        React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.58824 20.7387C9.06596 20.4616 9.67789 20.6242 9.95501 21.1019C10.0547 21.2737 10.1977 21.4163 10.3698 21.5154C10.5419 21.6146 10.7371 21.6668 10.9357 21.6668C11.1343 21.6668 11.3294 21.6146 11.5015 21.5154C11.6736 21.4163 11.8167 21.2737 11.9163 21.1019C12.1935 20.6242 12.8054 20.4616 13.2831 20.7387C13.7608 21.0158 13.9234 21.6277 13.6463 22.1055C13.3709 22.5803 12.9755 22.9745 12.4997 23.2485C12.024 23.5225 11.4847 23.6668 10.9357 23.6668C10.3867 23.6668 9.84732 23.5225 9.37159 23.2485C8.89587 22.9745 8.50048 22.5803 8.22501 22.1055C7.94789 21.6277 8.11051 21.0158 8.58824 20.7387Z', fill: fill }),
        React.createElement("circle", { cx: '17.999794', cy: '6.0038328', r: '4', fill: accent })));
};

export { NotificationAlertIcon as default };