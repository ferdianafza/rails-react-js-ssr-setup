import React from 'react';

export default class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { book: {} };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/books/${id}`).
      then((response) => response.json()).
      then((book) => this.setState({ book }));
  }

  render() {
    const { book } = this.state;
    return (
      <div>
        <div>
          <p>
            <label> Title :</label>
            {book.title}
          </p>
        </div>

        <div>
          <label> Author </label>
          <p> {book.author} </p>
        </div>

        <div>
          <label> Price </label>
          <p> {book.price} </p>
        </div>
        <div>
          <label> Stock </label>
          <p> {book.stock} </p>
        </div>
      </div>
    );
  }
}