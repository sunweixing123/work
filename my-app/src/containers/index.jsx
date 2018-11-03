import React, {Component} from 'react';
// import { } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import City from './City';
import Detail from './Detail';
import Home from './Home';
import Search from './Search';
import User from './User';
import NotFound from './404'

class App extends Component {
  render() {
      return (
          <div>
              <h1>header</h1>
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
              <h1>footer</h1>
          </div>
      )
  }
}
export default App;