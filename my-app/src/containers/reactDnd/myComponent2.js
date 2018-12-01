import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';

const type = 'xxx';
const spec = {
    drop(props, monitor, component){
        // ..
      },
      hover(props, monitor, component){
        // ..
      },
      canDrop(props, monitor){
        // ..
      }
};
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    };
}

class Component2 extends Component {
    render() {
        return (
            <div>test2</div>
        )
    }
}


export default DropTarget(type, spec, collect)(Component2);