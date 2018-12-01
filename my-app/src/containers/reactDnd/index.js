import React, {Component} from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { Divider } from 'antd';
import Component1 from './myComponent1';
import Component2 from './myComponent2';

class App extends Component {
    render() {
        return (
            <div>
                <Component1 />
                <Component2 />
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(App);