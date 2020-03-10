import React from 'react';
import {Redirect} from 'react-router-dom';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      price: '',
      stock: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  createBookRequest = (event) => {
    console.log('this.state', this.state);
    fetch('/api/v1/books', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => this.props.history.push(`/books`));
  }

  render() {
    const {title, author, price, stock} = this.state;
    return (
      <div>
        <h3>New Book</h3>
        <div>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Author: </label>
          <input
            type='text'
            name='author'
            value={author}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Price: </label>
          <input
            type='number'
            name='price'
            value={price}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Stock: </label>
          <input
            type='number'
            name='stock'
            value={stock}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.createBookRequest}>Create</button>
      </div>
    );
  }
}