import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

const shelves = ['currentlyReading', 'wantToRead', 'read'];

const Bookshelf = ({ books, moveBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reading List</h1>
      </div>
      {shelves.map(shelf => {
        return (
          <div className="list-books-content" key={shelf}>
            <div className="bookshelf">
              <h2 className="bookshelf-title">
                {shelf === 'currentlyReading' && 'Currently Reading'}
                {shelf === 'wantToRead' && 'Want To Read'}
                {shelf === 'read' && 'Read'}
              </h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map(book => {
                    if (book.shelf === shelf) {
                      return <li key={book.id}><Book book={book} shelf={shelf} moveBook={moveBook}/></li>
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

export default Bookshelf;
