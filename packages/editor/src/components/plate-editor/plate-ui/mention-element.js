import React from 'react';
import { cn, withRef } from '@udecode/cn';
import { getHandler, PlateElement, useElement } from '@udecode/plate-common';
import { useFocused, useSelected } from 'slate-react';
export const MentionElement = withRef(({ children, prefix, renderLabel, className, onClick, ...props }, ref) => {
    const element = useElement();
    const selected = useSelected();
    const focused = useFocused();
    return (<PlateElement ref={ref} className={cn('inline-block cursor-pointer rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm font-medium', selected && focused && 'ring-2 ring-ring', element.children[0].bold === true && 'font-bold', element.children[0].italic === true && 'italic', element.children[0].underline === true && 'underline', className)} data-slate-value={element.value} contentEditable={false} onClick={getHandler(onClick, element)} {...props}>
      {prefix}
      {renderLabel ? renderLabel(element) : element.value}
      {children}
    </PlateElement>);
});
