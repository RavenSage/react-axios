import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

export class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        {/* <div className="test"></div> */}
        <div className="span1">ID</div>
        <span>NAME</span>
        <span>USER-NAME</span>
        <span>E-MAIL</span>
        <div className="idContainer">
          {data.map((person) => (
            <div className={`ID${person.id}`} key={person.id}>
              {person.id}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Person;
