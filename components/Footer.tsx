import React from 'react';

const Footer = () => {
    return(
        // <footer className="bg-black container relative z-10 py-4 mx-auto -mb-16 max-w-full">
        //     <h1 className="font-bold italic text-white text-2xl">
        //     ～Valuable Book Evaluation～
        //     </h1>
        // </footer>
        <footer className="bg-gray-400">
            <div className="text-white p-8 grid grid-cols-2 gap-16">
                <div>
                    <p className="mb-8">本を愛するすべての読書家へ</p>
                    <p className="mb-8 text-2xl italic">Vlauable Book Evaluation</p>
                </div>
                <div className="pt-8 leading-8"> 
                    <ul>
                        <li>利用規約</li>
                        <li>プライバシーポリシー</li>
                        <li>お問い合わせ</li>
                    </ul>
                </div>
                <div>
                    <div className="mb-8">MASA's</div>
                    <ul>
                        <li>カテゴリ1</li>
                        <li>カテゴリ2</li>
                        <li>カテゴリ3</li>
                    </ul>
                </div>
                <div className="col-span-4 justify-self-center">
                    Copyright all rights reserved
                </div>
            </div>
        </footer>
    );
  };

export default Footer;