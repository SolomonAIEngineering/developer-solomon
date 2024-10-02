import { useCallback, useRef } from 'react';
import { NodeViewWrapper } from '@tiptap/react';
import { cn } from '@/lib/editor/utils';
export const ImageBlockView = (props) => {
    const { editor, getPos, node } = props;
    const imageWrapperRef = useRef(null);
    const { src } = node.attrs;
    const wrapperClassName = cn(node.attrs['align'] === 'left' ? 'ml-0' : 'ml-auto', node.attrs['align'] === 'right' ? 'mr-0' : 'mr-auto', node.attrs['align'] === 'center' && 'mx-auto');
    const onClick = useCallback(() => {
        editor.commands.setNodeSelection(getPos());
    }, [getPos, editor.commands]);
    return (<NodeViewWrapper>
      <div className={wrapperClassName} style={{ width: node.attrs['width'] }}>
        <div contentEditable={false} ref={imageWrapperRef}>
          <img className='block' src={src} alt='' onClick={onClick}/>
        </div>
      </div>
    </NodeViewWrapper>);
};
export default ImageBlockView;
