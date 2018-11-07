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
            <div>选择城市</div>
        )
    }
}
export default City;