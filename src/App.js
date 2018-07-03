import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Home from './Home'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (<Home books={this.state.books} />)} />
        <Route path='/search' render={() => (<Search books={this.state.books} />)} />
      </div>
    )
  }
}

export default BooksApp
