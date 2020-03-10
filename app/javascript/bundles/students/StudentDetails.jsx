import React from 'react';

export default class StudentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { student: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/students/${id}`).
      then((response) => response.json()).
      then((student) => this.setState({ student }));
  }

  render() {
    const { student } = this.state;
    return (
      <div>
        <div>
          <p>
            <label> Firstname : {student.firstname}</label>
          </p>
        </div>

        <div>
          <p>
            <label> Lastname : {student.lastname}</label> 
          </p>
        </div>
        <div>
          <p> 
            <label> Address : {student.address} </label>
          </p>
        </div>
        <div>
          <p> 
            <label> Major : {student.major}</label>
          </p>
        </div>
      </div>
    );
  }
}