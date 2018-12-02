import React, {Component} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

class Context extends Component {
  onDragStart = () => {console.log(123)}
  onDragEnd = () => {console.log(456)}

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div>Hello world</div>
        <div>Hello world</div>
      </DragDropContext>
    )
  }
}

export default Context;