import React from 'react'
import Image from 'next/image';

// import Button from '../button/Button';
import LgForm from './LgForm';

const Top = () => {
    return (
    <div className="h-screen flex items-center relative">
      <div  className="bg-black z-0 bg-opacity-25" >
        <Image layout="fill" src="/home.jpg" alt=""></Image>
        <div className="bg-black absolute inset-0 opacity-40"></div>
      </div>
      <div className="container relative">
        <div className="grid py-40 lg:grid-cols-2 items-center">
          <div>
            <p className="font-bold text-white text-6xl tracking-wider leading-loose">
              手に取った、その書籍
              <br />
              本当の価値を知ろう
            </p>
          </div>
          <div className="pl-20">
            <LgForm />
          </div>
          {/* <Button childern="さあ、はじめよう" /> */}
          {/* <div className="lg:ml-60 items-center">
            <a href="" className="rounded-full inline-block px-24 py-4 bg-white shadow-lg font-bold mb-10 opacity-70">
              <p className="font-bold text-2xl">ログイン</p>
            </a>
            <br />
            <a href="" className="rounded-full inline-block px-14 py-4 bg-white shadow-lg font-bold opacity-70">
              <p className="font-bold text-2xl">さあ、はじめよう</p>
            </a>
          </div> */}
        </div>
      </div>
    </div>
    );
};

export default Top;
