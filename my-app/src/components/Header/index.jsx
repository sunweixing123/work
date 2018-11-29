import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.less';
import { Input, Icon, Select } from 'antd';
import { createSecurePair } from 'tls';
const Option = Select.Option;

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      this.back = this.handleBack.bind(this);
    }
    handleBack() {
      window.history.back();
    }
    render() {
       return (
           <div className="head">
               <div onClick={this.back} className="back">返回</div>
               <div className="title">{this.props.title}</div>
           </div>
       )
    };
}
export default Header;