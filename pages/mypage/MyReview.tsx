import React, {Component} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Title from '../../components/title/Title';
import BookArea from '../booklist/BookArea';


const MyReview = () => {
        return (
            <>
            <div className=" bg-gray-100 m-auto pt-44 pb-44 text-center text-gray-600 block">
                <div className="border-b-4 border-fuchsia-600 border-gray-600 pt-4 pb-4">
                    <h2 className="text-gray-600 italic font-bold text-4xl text-center tracking-widest">
                        サービスのご利用方法
                    </h2>
                </div>
            </div>
            <div>
            <BookArea />
            </div>
            </>
        );
};

export default MyReview;