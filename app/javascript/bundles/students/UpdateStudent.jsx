import React from 'react';

export default class UpdateStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      major: ''
    }
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/students/${id}`).
      then((response) => response.json()).
      then((student) => this.setState({ ...student }));
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateStudentRequest = (event) => {
    fetch(`/api/v1/students/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => this.props.history.push(`/students`));
  }

  render() {
    const {firstname, lastname, address, major} = this.state;
    return (
      <div>
        <h3>Update Student</h3>
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
        <button onClick={this.updateStudentRequest}>Update</button>
      </div>
    );
  }
}