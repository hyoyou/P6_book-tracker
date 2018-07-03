import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const shelves = ['currentlyReading', 'wantToRead', 'read'];

class Bookshelf extends Component {
  render() {
    console.log(this.props.books)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {shelves.map(shelf => {
          return (
            <div className="list-books-content" key={shelf}>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.books.map(book => {
                      if (book.shelf === shelf) {
                        return <li><Book book={book} key={book.id} /></li>
                      }
                    })}
                  </ol>
                </div>
              </div>
            </div>
          )
        })}
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
