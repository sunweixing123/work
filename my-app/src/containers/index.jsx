import React, {Component} from 'react';
// import { } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import City from './City';
import Detail from './Detail';
import Home from './Home';
import Search from './Search';
import User from './User';
import NotFound from './404'
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
      if (cityName === '') {
          cityName = '北京';
      }

      //城市信息存储到redux中

    //   this.props.userInfoActions.updata({
    //       cityName: cityName;
    //   })
  }

  mapStateToProps(state) {
      return {

      }
  }

//   mapDispatchToProps(dispatch) {
//       return {
//           userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
//       }
//   }
  render() {
      return (
          <div>
              <Router history={this.props.history}>
                  <React.Fragment>
                      <Switch>
                          {/* <Route path="/" exact component={App} /> */}
                          <Route path="/" exact component={Home}></Route>
                          <Route path="/city" component={City}></Route>
                          <Route path="/detail" component={Detail}></Route>
                          <Route path="/search" component={Search}></Route>
                          <Route path="/user" component={User}></Route>
                          <Route component={NotFound}></Route>
                      </Switch>
                  </React.Fragment>
              </Router>
          </div>
      )
  }
}
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(App)
export default App;