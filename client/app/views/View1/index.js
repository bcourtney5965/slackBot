import React, { Component } from 'react';
import axios from 'axios';

class View1 extends Component {
  constructor() {
    super()
  }
  ajaxTest() {
    console.log('hello');
    axios.post('/api/test', {"from": "client"})
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div onClick={this.ajaxTest}> Hello World!! </div>
    );
  }
}

export default View1