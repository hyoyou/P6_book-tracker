import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Bookshelf from './Bookshelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount() {
    try {
      const books = await BooksAPI.getAll();
      this.setState({ books });
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (<Bookshelf books={this.state.books} />)} />
        <Route path='/search' render={() => (<Search books={this.state.books} />)} />
      </div>
    )
  }
}

export default BooksApp
