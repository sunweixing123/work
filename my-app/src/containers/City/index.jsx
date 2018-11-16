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
    render() {
        return (
            <div className="cityDetail">
              <h1>选择城市</h1>
              <div>北京</div>
              <div>上海</div>
              <div>天津</div>
              <div>广东</div>
              <div>黑龙江</div>
              <div>大庆</div>
              <div>打卡</div>
              <div>打卡1</div>
            </div>
        )
    }
}
export default City;