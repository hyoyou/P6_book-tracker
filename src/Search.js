import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

export default class Search extends Component {
  state = {
    results: []
  }

  // Send fetch requests to search for query on input
  onInput = event => {
    BooksAPI.search(event.target.value)
    .then(results => {
      if (results) {
        this.filterShelf(results)
        this.setState({ results })
      } else {
        this.setState({ results: [] })
      }
    })
    .catch(error => console.log(error))
  }

  // Check results from fetch request against user's books, add appropriate shelf to each book
  filterShelf = books => {
    books.map(book => {
      let shelvedBook = this.props.books.find(userBook => {
        return userBook.id === book.id
      })

      if (shelvedBook) {
        book.shelf = shelvedBook.shelf;
      } else {
        book.shelf = "none";
      }
    })
  }

  render() {
    const { results } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.onInput} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.length === 0 ?
              <h2>No results</h2>
              :
              results.length > 0 && results.map(book => {
                return <li key={book.id}><Book book={book} moveBook={this.props.moveBook}/></li>
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

{/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/}
