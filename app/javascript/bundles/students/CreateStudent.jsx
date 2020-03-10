import React from 'react';
import {Redirect} from 'react-router-dom';

export default class CreateStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      major: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createStudentReques = (event) => {
    console.log('this.state', this.state);
    fetch('/api/v1/students', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => this.props.history.push(`/students`));
  }

  render() {
    const {firstname, lastname, address, major} = this.state;
    return (
      <div>
        <h3>New Book</h3>
        <div>
          <label>firstname: </label>
          <input
            type='text'
            name='firstname'
            value={firstname}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>lastname: </label>
          <input
            type='text'
            name='lastname'
            value={lastname}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>address: </label>
          <input
            type='text'
            name='address'
            value={address}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>major: </label>
          <input
            type='text'
            name='major'
            value={major}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.createStudentReques}>Create</button>
      </div>
    );
  }
}