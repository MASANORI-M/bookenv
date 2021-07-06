import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Title from '../../components/title/Title';
import Button from '../../components/button/Button';

const How = () => {
    return (
        <>
            <Title childern="HOW" />
            <div className=" bg-gray-100 m-auto pt-44 pb-44 text-center text-gray-600 block">
                <div className="border-b-4 border-fuchsia-600 border-gray-600 pt-4 pb-4">
                    <h2 className="text-gray-600 italic font-bold text-4xl text-center tracking-widest">
                        サービスのご利用方法
                    </h2>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container">
                    <div className="grid py-40 lg:grid-cols-2 items-center">
                        <div className="text-center">
                            <Image width="350" height="350" className="rounded-lg shadow-2xl" src="/value1.jpg" alt=""></Image>
                        </div>
                        <div className="text-gray-600 text-center">
                            <h3 className="text-2xl font-bold">1. 評価したい本を検索する</h3>
                            <p className="text-1xl mt-12 tracking-widest leading-8">
                                なぜこの本を読もうと思ったのか、<br />
                                なぜこの本の中身が素晴らしいと感じたのか、<br />
                                あなたの持つ"本の価値"を発信できます。
                            </p>
                        </div>
                    </div>
                    <div className="grid py-40 lg:grid-cols-2 items-center">
                        <div className="text-center">
                            <Image width="350" height="350" className="rounded-lg shadow-2xl" src="/value2.jpg" alt=""></Image>
                        </div>
                        <div className="text-gray-600 text-center">
                            <h3 className="text-2xl font-bold">2. 本を評価をする</h3>
                            <p className="text-1xl mt-12 tracking-widest leading-8">
                                なぜこの本を読もうと思ったのか、<br />
                                なぜこの本の中身が素晴らしいと感じたのか、<br />
                                あなたの持つ"本の価値"を発信できます。
                            </p>
                        </div>
                    </div>
                    <div className="grid py-40 lg:grid-cols-2 items-center">
                        <div className="text-center">
                            <Image width="350" height="350" className="rounded-lg shadow-2xl" src="/value3.jpg" alt=""></Image>
                        </div>
                        <div className="text-gray-600 text-center">
                            <h3 className="text-2xl font-bold">3. 投稿する</h3>
                            <p className="text-1xl mt-12 tracking-widest leading-8">
                                なぜこの本を読もうと思ったのか、<br />
                                なぜこの本の中身が素晴らしいと感じたのか、<br />
                                あなたの持つ"本の価値"を発信できます。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 m-auto pt-44 pb-16 text-center text-gray-600 block">
                <p className="text-4xl mb-4">さあ、やってみよう!!</p>
            </div>
            <div className="text-center bg-gray-100 pb-16">
                <Link href="/account/AccountTop">
                    <a>   
                        <Button size='lg' childern='READY GO!' />
                    </a>
                </Link>
            </div>
        </>
    );
};

export default How;