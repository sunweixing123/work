import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.userinfo);
        console.log(this.props.userInfoActions);
    }
    // mapStateToProps(state) {
    //     return {
    //         userinfo: state.userinfo;
    //     }
    // }
    // mapDispatchToProps() {
    //     return {

    //     }
    // }
    callBack() {
      window.history.back()
    }
    render() {
        return (
            <div className="cityDetail">
              <div onClick={this.callBack}>返回</div>
              <h1>选择城市</h1>
              <div>北京</div>
              <div>深圳</div>
            </div>
        )
    }
}
export default City;