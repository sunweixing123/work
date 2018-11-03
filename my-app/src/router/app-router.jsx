import React, {Component} from 'react';
// import { } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/index'
import City from '../containers/City';
import Detail from '../containers/Detail';
import Home from '../containers/Home';
import Search from '../containers/Search';
import User from '../containers/User';

class RouteComponent extends Component {
  render() {
      return (
          <div>
              <Router history={this.props.history}>
                  <React.Fragment>
                      <Switch>
                          <Route path="/" component={App} />
                          {/* <Route path="/home" component={Home}></Route>
                          <Route path="/city" component={City}></Route>
                          <Route path="/detail" component={Detail}></Route>
                          <Route path="/search" component={Search}></Route>
                          <Route path="/user" component={User}></Route> */}
                      </Switch>
                  </React.Fragment>
              </Router>
          </div>
      )
  }
}
export default RouteComponent;