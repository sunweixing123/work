import React, {Component} from 'react';
import './style.css';
import { Input, Icon } from 'antd';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return (
           <div className="head">
               <div className="city">深圳</div>
               <div className="input"><Icon type="search" /><Input className="search" placeholder="请输入关键字"></Input></div>
               <div className="user"><Icon type="home" /></div>
           </div>
       )
    };
}
export default HomeHeader;