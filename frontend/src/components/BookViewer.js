import React, {useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function BookViewer(props){

    const auth = useContext(AuthContext);
    function useGetBooks(){
        const [books, setBooks] = useState([]);
        let count = [];
        count.push(books.length);
        useEffect(() => {
          const get = async () => {
            setBooks(await auth.getBooks(auth.token));
        };
        get();
        }, count);
        return books;
    }
    
    const books = useGetBooks();
    console.log(books);
    console.log(books.length);
  
    return (
    <div> 
        { books.map((val, index) => {
            let authClass = '';

            if (val.auth) {
                authClass = val.auth.includes('admin') ? 'admin' : '';
                authClass = val.auth.includes('editor') ? 'editor' : '';
                authClass = val.auth.includes('user') ? 'user' : '';
            }
        return  ( 
        <div key={index} className='BookViewer'>
                <p>Title: {val.title}</p>
                <p>Author: {val.author}</p>
         </div>
         );
        })}
     </div>
    )
}

export default BookViewer;