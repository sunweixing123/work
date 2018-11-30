import React, {Component} from 'react';
import { getdata1 } from '../../../fetch/home/home'

class Ad extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    const result = getdata1();
    console.log(result);
    result.then((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>Ad</div>
    )
  }
}
export default Ad;