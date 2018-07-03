import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Bookshelf from './Bookshelf'
import Home from './Home'
import Search from './Search'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
