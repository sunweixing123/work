import React, {Component} from 'react';
import { Divider } from 'antd';
import { DragSource } from 'react-dnd';

const type = 'xxx';
const spec = {
    beginDrag(props, monitor, component){
        // 返回需要注入的属性
        return {
          id: props.id
        }
      },
      endDrag(props, monitor, component){
        // ..
      },
      canDrag(props, monitor){
        // ..
      },
      isDragging(props, monitor){
        // ..
      }
};
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    };
}
class Component1 extends Component {
    render() {
        return (
           <div>
                <div>test1</div>
                <div>test1</div>
                <div>test1</div>
                <div>test1</div>
                <div>test1</div>
           </div>
        )
    }
}

export default DragSource(type, spec, collect)(Component1);
