import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import Header from '../../components/Header';
import CityList from '../../components/CityList';
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'; 

class City extends Component {
    constructor(props) {
      super(props);
      this.changeCity = this.changeCity.bind(this);
    }
    componentDidMount() {
      console.log(this.props);
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
    changeCity(newCity) {
      if(newCity == null) {
        return;
      }
      //修改redux
      const userinfo = this.props.userinfo;
      userinfo.cityName = newCity;
      this.props.userInfoActions.update(userinfo);

      //修改localstorage
      LocalStore.setItem(CITYNAME, newCity);


      //跳转到首页
      window.history.back();
    }
    render() {
        return (
            <div className="cityDetail">
              <Header title="选择城市" />
              <div>{this.props.userinfo.cityName}</div>
              <CityList changeFn={this.changeCity} />

            </div>
        )
    }
}
// export default City;

//绑定redux
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)