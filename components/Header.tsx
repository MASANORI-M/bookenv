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
            <nav className="my-0 mr-0 ml-auto">
                <ul className="mx-0 my-0 flex">
                    <Link href="/about/About">
                        <li className="my-5 ml-14 mr-0 text-xl"><a className="text-gray-600" href="/">ABOUT</a></li>
                    </Link>
                    <li className="my-5 ml-14 mr-0 text-xl"><a className="text-gray-600" href="/">HOW</a></li>
                    <li className="my-5 ml-14 mr-0 text-xl"><a className="text-gray-600" href="/">EVALUATION</a></li>
                    <li className="my-5 ml-14 mr-0 text-xl"><a className="text-gray-600" href="/">BOOK LIST</a></li>
                    <li className="my-0 ml-14 mr-0 text-xl cursor-pointer">
                        <Menues />
                    </li>
                </ul>
            </nav>
        </header>
    );
  };

export default Header;