import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Bookshelf from './Bookshelf';
import Home from './Home';
import Search from './Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Search />
        <Home />
      </div>
    )
  }
}

export default BooksApp
