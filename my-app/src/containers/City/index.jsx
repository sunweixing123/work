import React, { Component } from 'react';
import Header from '../../components/Header';
import CityList from '../../components/CityList';

class City extends Component {
    componentDidMount() {
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
              {/* <div onClick={this.callBack}>返回</div>
              <h1>选择城市</h1>
              <div>北京</div>
              <div>深圳</div> */}
              <Header title="选择城市" />
              <CityList />

            </div>
        )
    }
}
export default City;