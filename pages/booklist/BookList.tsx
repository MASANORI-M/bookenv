import React, {Component} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import request from 'superagent';

import Title from '../../components/title/Title';
import SearchArea from '../../components/search/SearchArea';
import BookArea from './BookArea';
import BookListCard from '../../components/card/BookListCard';
import { render } from '@headlessui/react/dist/utils/render';
import { any } from 'prop-types';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                const cleanData = this.cleanData(data);
                this.setState({ books: cleanData})
            });
    }

    handleSearch = (e) => {
        console.log(e.target.value);
        this.setState({ searchField: e.target.value })
    }
    
    handleSort = (e) => {
        console.log(e.target.value);
        this.setState({ sort: e.target.value })
    }

    cleanData = (data) => {
        const cleanData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            } else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' }
            }

            return book;
        });

        return cleanData;
    }

    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            if(this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            } else if(this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        });

        return (
            <div>
            <Title childern="BOOK LIST" />
            <SearchArea 
                searchBook={this.searchBook} 
                handleSearch={this.handleSearch}
                handleSort = {this.handleSort}
                />
            <BookArea books={sortedBooks} />
            {/* <BookListCard /> */}
            </div>
        );
    }
};

export default BookList;