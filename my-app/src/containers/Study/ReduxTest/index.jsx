import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';
import * as Test1 from '../../../actions/';
import './index.less'

class ReduxTest extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  changeRedux() {
    this.props.userInfoActions.test1('test修改成功');
  }


  render() {
    console.log(this.props);
    return (
      <div className="reduxTest" onClick={this.changeRedux}>
        {this.props.testData}
      </div>
    )
  }
}

//练习绑定redux
function mapStateToProps(state) {
  console.log(state);
  return {
    testData: state.test,
  }
}

function mapDispatchToProps(dispatch) { //把action和dispatch绑定
  return {
    testActions: bindActionCreators(Test1, dispatch),
  }
}

export default connect (
  mapDispatchToProps,
  mapStateToProps,
)(ReduxTest);