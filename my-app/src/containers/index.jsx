import React, {Component} from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../actions/userinfo';
import City from './City'; //城市页
import Detail from './Detail'; //详情页
import Home from './Home'; //首页
import Search from './Search'; //搜索
import User from './User'; //用户
import NotFound from './404' //error页
import Dnd from './reactDnd'; //拖拽组件
import Context from './beautifulDnd/context'
import Beauty from './beautifulDnd/BeautyDnd'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey';

class App extends Component {
  constructor(props, context) {
      super(props);
      this.state = {
          initDone: false, //是否显示加载中
      }
  }
  componentDidMount() {
      let cityName = LocalStore.getItem(CITYNAME);
      if (cityName === null) {
          cityName = '北京';
      }

    //   城市信息存储到redux中

      this.props.userInfoActions.update({
          cityName: cityName
      })
  }

  render() {
      return (
          <div>
              <Router history={this.props.history}>
                  <React.Fragment>
                      <Switch>
                          {/* <Route path="/" exact component={App} /> */}
                          <Route path="/" exact component={Home}></Route>
                          <Route path="/city" component={City}></Route>
                          <Route path="/detail/:hello?'" component={Detail}></Route>
                          <Route path="/search" component={Search}></Route>
                          <Route path="/user" component={User}></Route>
                          <Route path="/dnd" component={Beauty}></Route>
                          <Route component={NotFound}></Route>
                      </Switch>
                  </React.Fragment>
              </Router>
          </div>
      )
  }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
// export default App;