import React from 'react';
import Image from 'next/image';

import SecondButton from '../../components/button/SecondButton';

const AccountSecond = () => {
    return (
        <div className="container h-screen flex items-center relative">
        <Image layout="fill" src="/home.jpg" alt=""></Image>
            <div  className="bg-black z-0 bg-opacity-25" >
                <div className="bg-black absolute inset-0 opacity-40"></div>
            </div>
            <div className="bg-gray-300 opacity-90 text-gray-600 body-font relative w-max pb-12">
                <div className="container px-4 pt-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            登録内容の確認
                        </h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            修正する場合は下記の戻るボタンを押してください。
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">姓（Family Name）</label>
                                <p className="text-gray-700 text-2xl py-4">
                                    松村
                                </p>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">名（First Name）</label>
                                <p className="text-gray-700 text-2xl py-4">
                                    昌典
                                </p>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">ニックネーム</label>
                                <p className="text-gray-700 text-2xl py-4">
                                    MASA
                                </p>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Email</label>
                                <p className="text-gray-700 text-2xl py-4">
                                    mmmm@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Password<span className="text-red-500 mx-4">※パスワードは非表示となっています。</span></label>
                                <p className="text-gray-700 text-2xl py-4">
                                    ●●●●●●●●●●
                                </p>
                            </div>
                        </div>
                        <SecondButton childern="登録" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSecond;