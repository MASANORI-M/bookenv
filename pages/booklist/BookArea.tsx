import React from "react";
import BookListCard from "../../components/card/BookListCard";

const BookArea = (props) => {
    return (
        <div>
            {
                props.books.map((book, i) => {
                    console.log(book);
                    console.log(book.volumeInfo.imageLinks.thumbnail);
                    return <BookListCard
                                key={i} 
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                autor={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                            />
                })
            }
        </div>
    );
};

export default BookArea;