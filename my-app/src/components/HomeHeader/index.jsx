import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Input, Icon, Select } from 'antd';
const Option = Select.Option;

class HomeHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return (
           <div className="head">
               <Link to="/city">
                   <div className="city">北京test</div>
               </Link>
               <div className="input"><Icon type="search" /><Input className="search" placeholder="请输入关键字"></Input></div>
               <div className="user"><Icon type="home" /></div>
           </div>
       )
    };
}
export default HomeHeader;