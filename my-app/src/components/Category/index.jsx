import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

class Category extends Component {
  constructor(props, context) {
    super(props, context);
    this.state ={
      index: 0,
    }
  }

  render() {
    var opt = {
      auto: 2000,
      // callback: function(index) {
      //   this.setState({
      //     index: index,
      //   })
      // }.bind(this),
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
          {this.state.index}
        </div>
      </div>
    )
  }
}

export default Category;