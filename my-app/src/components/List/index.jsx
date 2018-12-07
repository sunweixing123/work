import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less';
import Item from './Item';

class List extends Component {
    render() {
        return (
            <div className="list-container">
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default List;