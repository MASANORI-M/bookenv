import React from 'react';
import Image from 'next/image';

import SecondButton from '../../components/button/SecondButton';

const AccountTop = () => {
    return (
        <div className="h-screen flex items-center relative">
            <div  className="bg-black z-0 bg-opacity-25" >
                <Image layout="fill" src="/home.jpg" alt=""></Image>
                <div className="bg-black absolute inset-0 opacity-40"></div>
            </div>
            <div className="bg-gray-300 opacity-90 text-gray-600 body-font relative w-max pb-12">
                <div className="container px-4 pt-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            CREATE ACCOUNT
                        </h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            空欄内をすべて記入してください。
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">姓（Family Name）<span className="text-red-500">※必須</span></label>
                                <input type="text" id="faname" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">名（First Name）<span className="text-red-500">※必須</span></label>
                                <input type="text" id="finame" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">ニックネーム<span className="text-red-500">※必須</span></label>
                                <input type="text" id="nname" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Email<span className="text-red-500">※必須</span></label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">Password<span className="text-red-500">※必須</span></label>
                                <input type="password" id="pass" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-600">（再）Password<span className="text-red-500">※必須</span></label>
                                <input type="password" id="pass" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <SecondButton childern="次へ" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountTop;