import React, {Component} from 'react';
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
               <div className="city">
                 {/* <Select defaultValue="beijing">
                     <Option value="beijing">北京</Option>
                     <Option value="shanghai">上海</Option>
                 </Select> */}
                 北京
               </div>
               <div className="input"><Icon type="search" /><Input className="search" placeholder="请输入关键字"></Input></div>
               <div className="user"><Icon type="home" /></div>
           </div>
       )
    };
}
export default HomeHeader;