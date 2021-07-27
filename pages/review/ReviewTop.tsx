import React from 'react';
import Image from 'next/image';

import Button from '../../components/button/Button';

const ReviewTop = () => {

    const KnowledgeLevel = [
        'choose',
        '事前知識なし',
        '雑学レベル',
        '学習レベル',
        '業務レベル',
        '専門家'
    ];

    const Position = [
        'Choose',
        '未学習児',
        '小学校低学年',
        '小学校高学年',
        '中学生',
        '高校生',
        '文系大学生',
        '理系大学生',
        '文系大学院生',
        '理系大学院生',
        '専門学校生',
        '一般人',
        '会社員（一般職）',
        '会社員（リーダー）',
        '会社員（部課長）',
        '経営者・経営陣',
        'フリーランス'
    ];

    return (
        <div className="container block">
            <div className="text-center mt-12">
                {/* ○○のなかはGoogle book APIで取得した書籍のタイトルを挿入予定 */}
                <h1 className="text-4xl">○○を評価をする</h1>
            </div>
            <div className="mx-auto h-100 grid grid-cols-2 mt-16 mb-8">
                <div className="border border-gray-900">
                    {/* ここの画像はGoogle book APIで取得 ※仮置き */}
                    <img src="/1.jpg" alt="" />
                </div>
                <div className="container border border-gray-900">
                    <div className="my-4">
                        <p className="font-bold">★ 書籍内容に関する事前知識</p>
                        <div className="mt-4">
                            <select className="w-full border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            {KnowledgeLevel.map((option) => {
                                return (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                    </div>
                    <div className="my-8">
                        <p className="font-bold">★ だれに読んで欲しいか</p>
                        <div className="mt-4">
                            <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                            <select className="w-full border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                {Position.map((option) => {
                                    return (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="my-8 w-auto">
                        <p className="inline-flex font-bold">★ 評価</p>
                        <div className="ml-80 inline-flex">
                            {/* レートマークの表現の仕方 */}
                            ★★★★★
                        </div>
                    </div>
                    <div className="mt-12 w-auto">
                        <p className="inline-flex mb-4 font-bold">★ なぜ読もうと思ったか</p>
                        <div>
                            <textarea className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message" rows={8} placeholder="理由）">
                            </textarea>
                        </div>
                    </div>
                    <div className="mt-12 w-auto">
                        <p className="inline-flex mb-4 font-bold">★ 読んだ感想</p>
                        <div>
                            <textarea className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message" rows={8} placeholder="あなたの悩みは解決したか？">
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-16 cursor-pointer">
                <Button childern="評価内容の確認" />
            </div>
        </div>

    );
}

export default ReviewTop;