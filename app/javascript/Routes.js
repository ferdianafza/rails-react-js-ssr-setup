import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Posts from './bundles/posts/index';
import PostDetails from './bundles/posts/PostDetails';
import CreatePost from './bundles/posts/CreatePost';
import UpdatePost from './bundles/posts/UpdatePost';

import Books from './bundles/books/index';
import CreateBook from './bundles/books/CreateBook';
import UpdateBook from './bundles/books/UpdateBook';
import BookDetails from './bundles/books/BookDetails';

import Students from './bundles/students/index';
import CreateStudent from './bundles/students/CreateStudent';
import UpdateStudent from './bundles/students/UpdateStudent';
import StudentDetails from './bundles/students/StudentDetails';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route
      path="/posts/new"
      exact
      component={CreatePost}
      />
      <Route
      path="/posts/:id/edit"
      exact
      component={UpdatePost}
      />
      <Route
        path="/posts/:id"
        exact
        component={PostDetails}
       />


      <Route exact path="/books">
        <Books />
      </Route>
      <Route
        path="/books/new"
        exact
        component={CreateBook}
      />
      <Route
        path="/books/:id/edit"
        exact
        component={UpdateBook}
      />
      <Route
        path="/books/:id"
        exact
        component={BookDetails}
      />

      
      <Route exact path="/students">
        <Students />
      </Route>
      <Route
        path="/students/new"
        exact
        component={CreateStudent}
      />
      <Route
        path="/students/:id/edit"
        exact
        component={UpdateBook}
      />
      <Route
        path="/students/:id"
        exact
        component={StudentDetails}
       />
    </Switch>
  );
}