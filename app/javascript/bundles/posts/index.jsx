import React from 'react';
import { Link } from "react-router-dom";

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('/api/v1/posts').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  }

  fetchPostsList = () => {
    fetch('/api/v1/posts').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  };

  handleDelete = (postId) => {
    fetch(`/api/v1/posts/${postId}`, { method: 'delete' }).
      then((response) => {
        alert('Post deleted successfully')
        this.fetchPostsList();
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h3>All Posts</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Is Published</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <Link to={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.description}</td>
                  <td>{post.is_published ? 'Yes' : 'No' }</td>
                  <td>
                    <Link to={`/posts/${post.id}/edit`}>
                      Edit
                    </Link>
                    <button onClick={() => this.handleDelete(post.id) }>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        <Link to="posts/new">
          Create Post
        </Link>
      </div>
    );
  }
}