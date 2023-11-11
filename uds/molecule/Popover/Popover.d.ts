import React from 'react';
import { AnchorProps, ContentProps, PopoverProps } from './Popover.types';
import '../../tailwind.css';
/** @deprecated - Use Popper component instead. */
declare const _default: ((props: PopoverProps) => React.JSX.Element) & {
    Anchor: (props: AnchorProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    Content: (props: ContentProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export default _default;
