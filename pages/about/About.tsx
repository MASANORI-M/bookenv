import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Title from '../../components/title/Title';
import Button from '../../components/button/Button';

const About = () => {
    return (
        <>
            <Title childern="ABOUT" />
            <div className="bg-gray-100 m-auto pt-44 pb-44 text-center text-gray-600 block">
                <h2 className="text-4xl mb-20">1. サービスの目的</h2>
                <p className="leading-8 text-1xl">
                あなたの持つ<span className="text-xl text-red-500">その本の価値</span>を正確に、<br />
                <span className="text-xl text-blue-500">その本の価値</span>を知りたいと思っている方へつなげる<br />
                </p>
                <p className="leading-8 text-1xl mt-12">
                その本はあなたが本当に必要としているか、<br />
                知ることのできるサービスです。
                </p>
            </div>
            <div className="bg-gray-100 m-auto pt20 pb-44 text-center text-gray-600 block">
                <h2 className="text-4xl mb-20">2. 制作者プロフィール</h2>
                <p className="leading-8 text-2xl">
                    化学屋 ＆ プログラマ
                </p>
                <ul className="my-8 leading-8">
                    <li>現職：化学系メーカーの研究開発職</li>
                    <li>副業：WEBサイト制作、WEBアプリ開発</li>
                </ul>
                <p className="leading-8">
                    20代は大学院で化学の研究に没頭し、<br />
                    30代社会人でプログラミングスキルを習得<br />
                    いつも専門書選びに悩んでいたのでこのサービスを開発
                </p>
            </div>
            <div className="bg-gray-100">
                <div className="container">
                    <h2 className="text-4xl mb-20 text-center">3. サービス開発のきっかけ</h2>
                    <div className="grid py-20 lg:grid-cols-2 items-center">
                        <div className="text-center text-graⅱy-600 text-2xl">
                            <p className="mb-8">ⅰ）2004　～　2013年</p>
                            <p>専門書籍の購入に苦労した学生時代</p>
                        </div>
                        <div className="text-gray-600 text-center">
                            <p className="text-1xl mt-12 tracking-widest leading-8">
                                化学好きで大学は工学部応用化学科の入学した当時、<br />
                                一般家庭でようやくインターネットが普及し始めていました。<br />
                                そのため専門知識の勉強はもっぱら本だのみになりましたが、<br />
                                専門書籍は高価で、一学生の私は購入するのにとても悩みました。<br />
                                当時、参考にできたのはAmazonの評価くらいでした。<br />
                                このころ、「自分に合う書籍を見つけられたらな」と思っていました。<br />
                            </p>
                        </div>
                    </div>
                    <div className="grid py-20 lg:grid-cols-2 items-center">
                        <div className="text-center text-gray-600 text-2xl">
                            <p className="mb-8">ⅱ）2014　～　2019年</p>
                            <p>もっと的確な書籍の評価サイトはないかと思うようになる</p>
                        </div>
                        <div className="text-gray-600 text-center">
                            <p className="text-1xl mt-12 tracking-widest leading-8">
                                大学院を修了し、化学メーカーの研究開発職に就職し、<br />
                                より高度な専門知識、社会人としての知識が必要になりました。<br />
                                給料を貰えるようになったとはいえ、専門書籍などは高価で、<br />
                                購入を思いとどまる本もありました。<br />
                                Amazonのように誰が評価したのか分からないものではなく、<br />
                                書籍の正確な評価サイトが欲しいと、常々思うようになりました。
                            </p>
                        </div>
                    </div>
                    <div className="grid py-20 lg:grid-cols-2 items-center">
                        <div className="text-center text-gray-600 text-2xl">
                            <p className="mb-8">ⅲ）2020年　～　現在</p>
                            <p>プログラミングスキルを身に付け自身で開発</p>
                        </div>
                        <div className="text-gray-600 text-center">
                            <p className="text-1xl mt-12 tracking-widest leading-8">
                                学生時代は興味のなかったプログラミングスキルの勉強を開始<br />
                                フロントエンドからバックエンドまで勉強していくなかで、<br />
                                "本の価値を正確に発信し、本の価値を知りたいと思っている方へつなげる"<br />
                                そのようなサービスを提供したいと想い開発しました。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 m-auto pt-44 pb-16 text-center text-gray-600 block">
                <h2 className="text-4xl mb-20">最後に</h2>
                <p className="leading-8 text-1xl">
                    開発のきっかけは自分に合う専門書籍の見つけるためですが、<br />
                    このサイトは専門書籍に限らず、すべての本について利用することができます。<br />
                    冒頭でも述べたとおり、このサービスの目的は<br />
                    "あなたの持つその本の価値を正確に、その本の価値を知りたいと思っている方へつなげる"、ことです。<br />
                </p>
                <p className="leading-8 text-1xl mt-12">
                    このサイトはあなたが望む本を探す一助になると思っています。<br />
                    ぜひ一度使用して、その感動を味わってください。
                </p>
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

export default About;