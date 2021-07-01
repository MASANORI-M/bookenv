import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Menues from "./menu/Menues";

const Header = () => {
    return(
        <header className=" text-white w-full pt-4 pb-4 pr-8 pl-8 bg-blue-400 top-0 flexed flex items-center">
            <h1 className="my-0 mx-0 px-0 py-0 text-4xl">
                <a href="/">Valuable Book Evaluation</a>
            </h1>
            <nav className="ml-auto">
                <ul className="flex">
                    <li className="my-5 ml-14 mr-0 text-xl text-gray-600">
                        <Link href="/about/About">
                            <a>
                                ABOUT
                            </a>
                        </Link>
                    </li>
                    <li className="my-5 ml-14 mr-0 text-xl text-gray-600">
                        <Link href="/how/How">
                            <a>
                                HOW
                            </a>
                        </Link>
                    </li>
                    <li className="my-5 ml-14 mr-0 text-xl"><a className="text-gray-600" href="/">EVALUATION</a></li>
                    <Link href="/booklist/BookList">
                        <li className="my-5 ml-14 mr-0 text-xl"><a className="text-gray-600" href="/">BOOK LIST</a></li>
                    </Link>
                    <li className="my-0 ml-14 mr-0 text-xl cursor-pointer">
                        <Menues />
                    </li>
                </ul>
            </nav>
        </header>
    );
  };

export default Header;