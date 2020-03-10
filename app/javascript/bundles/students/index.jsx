import React from 'react';
import { Link } from "react-router-dom";

export default class StudentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentDidMount() {
    fetch('/api/v1/students').
      then((response) => response.json()).
      then((students) =>  this.setState({ students }));
  }

  fetchStudentsList = () => {
    fetch('/api/v1/students').
      then((response) => response.json()).
      then((students) =>  this.setState({ students }));
  };

  handleDelete = (studentId) => {
    fetch(`/api/v1/students/${studentId}`, { method: 'delete' }).
      then((response) => {
        alert('Student deleted successfully')
        this.fetchStudentsList();
      });
  }

  render() {
    const { students } = this.state;
    return (
      <div>
        <h3>All students</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Address</th>
              <th>Major</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>
                    <Link to={`/students/${student.id}`}>
                      {student.firstname}
                    </Link>
                  </td>
                  <td>{student.lastname}</td>
                  <td>{student.address }</td>
                  <td>{student.major }</td>
                  <td>
                    <Link to={`/students/${student.id}/edit`}>
                      Edit
                    </Link>
                    <button onClick={() => this.handleDelete(student.id) }>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        <Link to="students/new">
          Create Student
        </Link>
      </div>
    );
  }
}