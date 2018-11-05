import React, {Component} from 'react';
import './style.css';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return (
           <div className="head">
               <div className="city">深圳</div>
               <div className="input"><input></input></div>
               <div className="user">用户中心</div>
           </div>
       )
    };
}
export default HomeHeader;