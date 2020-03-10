import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Routes from './Routes';

export default class App extends React.Component {
  render() {
    console.log('app being mounted');
    return (
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
        <hr />
        </div>
        <Routes />
      </Router>
    );
  }
}