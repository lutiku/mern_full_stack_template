import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
//import required components
import CreateBook from './CreateBook';
import EditBook from './EditBook';
import BookList from './BookList';

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path="/" component={BookList}/>
        {/*pass the id through the EditBook component*/}
        <Route path="/edit-book/:id" component={EditBook}/>
        {/*set the path to create a new user to CreateBook component*/}
        <Route path="/create-book" component={CreateBook}/>
      </div>
    </HashRouter>
  );
};

export default App;
