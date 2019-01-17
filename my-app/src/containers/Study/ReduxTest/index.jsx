// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { Button } from 'antd';
// import * as Test1 from '../../../actions/test1';
// import * as userInfoActionsFromOtherFile from '../../../actions/userinfo'

// import './index.less'

// class ReduxTest extends Component {
//   componentDidMount() {
//   //   this.props.testActions.testUpdata({
//   //     testData: 'firstData',
//   // })
//   }
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//     this.changeRedux = this.changeRedux.bind(this);
//   }

//   changeRedux() {
//     // this.props.testActions.testUpdata({
//     //   testData: '修改一下',
//     // });
//   }


//   render() {
//     console.log(this.props);
//     return (
//       <div className="reduxTest" onClick={this.changeRedux}>
//         {this.props.testData}
//       </div>
//     )
//   }
// }

// //练习绑定redux
// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     userinfo: state.userinfo,
//   }
// }

// function mapDispatchToProps(dispatch) { //把action和dispatch绑定
//   return {
//     testActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
//   }
// }

// export default connect (
//   mapDispatchToProps,
//   mapStateToProps,
// )(ReduxTest);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Test1 from '../../../actions/test1'

class City extends Component {
    constructor(props) {
      super(props);

    }
    componentDidMount() {
      console.log(this.props);
      this.props.userInfoActions.testUpdata('test');
    }
    render() {
        console.log(this.props);
        return (
            <div className="cityDetail">
              test
            </div>
        )
    }
}
// export default City;

//绑定redux
function mapStateToProps(state) {
    console.log(state);
    return {
        userinfo: state.userinfo
    }//redux
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(Test1, dispatch) //actions和dispatch结合
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)