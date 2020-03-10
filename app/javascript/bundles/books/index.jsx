import React from 'react';
import { Link } from "react-router-dom";

export default class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
    fetch('/api/v1/books').
      then((response) => response.json()).
      then((books) =>  this.setState({ books }));
  }

  fetchBooksList = () => {
    fetch('/api/v1/books').
      then((response) => response.json()).
      then((books) =>  this.setState({ books }));
  };

  handleDelete = (bookId) => {
    fetch(`/api/v1/books/${bookId}`, { method: 'delete' }).
      then((response) => {
        alert('Book deleted successfully')
        this.fetchBooksList();
      });
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <h3>All Books</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
              <th>Stock</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            books.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>
                    <Link to={`/books/${book.id}`}>
                      {book.title}
                    </Link>
                  </td>
                  <td>{book.author}</td>
                  <td>{book.price }</td>
                  <td>{book.stock }</td>
                  <td>
                    <Link to={`/books/${book.id}/edit`}>
                      Edit
                    </Link>
                    <button onClick={() => this.handleDelete(book.id) }>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        <Link to="books/new">
          Create Book
        </Link>
      </div>
    );
  }
}