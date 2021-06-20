import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Title from '../../components/title/Title';
import BookListCard from '../../components/card/BookListCard';

const BookList = () => {
    return (
        <>
            <Title childern="BOOK LIST" />
            <BookListCard />
        </>
    );
};

export default BookList;