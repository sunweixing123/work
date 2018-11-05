import React, { Component } from 'react';
import HomeHeader from '../../components/HomeHeader'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HomeHeader />
            </div>
        )
    }
}
export default Home;