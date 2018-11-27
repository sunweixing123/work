import React, {Component} from 'react';
// import { } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../containers/index'
class RouteComponent extends Component {
  render() {
      return (
          <div>
              <Router history={this.props.history}>
                  <React.Fragment>
                      <Switch>
                          <Route path="/" component={App} />
                      </Switch>
                  </React.Fragment>
              </Router>
          </div>
      )
  }
}
export default RouteComponent;