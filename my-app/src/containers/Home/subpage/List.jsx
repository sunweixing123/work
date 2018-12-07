import React, {Component} from 'react';
import { getdata1 } from '../../../fetch/home/home';
import List from '../../../components/List';

class PageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    const result = getdata1();
    console.log(result);
    result.then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
      this.setState({
        data: json,
      })
    })
  }
  render() {
    const { data } = this.state;
    return (
      <div className="subPage">
        <List data={data} />
      </div>
    )
  }
}
export default PageList;