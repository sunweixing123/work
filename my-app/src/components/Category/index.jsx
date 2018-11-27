import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

class Category extends Component {
  constructor(props, context) {
    super(props, context);
    this.state ={
      idx: 0,
    }
  }

  render() {
    var opt = {
      auto: 2000,
      callback: (index) => {
        console.log(index);
        // this.setState({idx: index}) //为社么不能设置state
      }
    }
    return (
      <div>
        <ReactSwipe
          className="carousel"
          swipeOptions={opt}
        >
          <div>
            <ul>
              <li>111</li>
              <li>111</li>
              <li>111</li>
              <li>111</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>111</li>
              <li>111</li>
              <li>111</li>
              <li>111</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>111</li>
              <li>111</li>
              <li>111</li>
              <li>111</li>
            </ul>
          </div>
        </ReactSwipe>
        <div>
          {this.state.idx}
        </div>
      </div>
    )
  }
}

export default Category;