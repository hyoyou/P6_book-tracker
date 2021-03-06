import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Bookshelf from './Bookshelf'
import Search from './Search'

export default class BooksApp extends React.Component {
  state = {
    books: []
  }

  // When component mounts, fetch all books from API and update state
  componentDidMount() {
    BooksAPI.getAll()
    .then(books => this.setState({ books }))
    .catch(error => console.error(error))
  }

  // Function to update shelf
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll()
    .then(books => this.setState({ books }))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (<Bookshelf books={this.state.books} moveBook={this.moveBook} />)} />
        <Route path='/search' render={() => (<Search books={this.state.books} moveBook={this.moveBook} />)} />
      </div>
    )
  }
}
