import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Table } from 'react-bootstrap';
import '../component/Book.css'
function BookList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get('https://api.itbook.store/1.0/new').then((res) => setList(res.data.books));
  }, []);

  console.log(list);

  return (
    <div className="book-list-container">
      <Table responsive className="book-table">
        <tbody>
          {list.map((book) => (
            <tr key={book.isbn13}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="book-image">
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="book-content">
                    <div className="book-title">{book.title}</div>
                    <div className="book-info">
                      {/* <div className="book-price">{`Price: ${book.price}`}</div> */}
                      <div className="book-rating">{`Rating: ${book.rating}`}</div>
                      <div className="book-author">{`Author: ${book.author}`}</div>
                      <div className="book-subtitle">{`Subtitle: ${book.subtitle}`}</div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BookList;