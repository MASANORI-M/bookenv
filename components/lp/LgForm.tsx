import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LgForm = () => {
    return(
        <div className="w-100 flex shadow-lg flex-col bg-cover bg-center justify-content bg-gray-200 opacity-60 p-24 rounded pt-8 pb-8">
            <div className="text-center text-gray-700 font-bold mb-6">
                <h2>ログイン</h2>
            </div>
            <div>
                <form>
                    <input className="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1" type="text" placeholder="Username" />
                    <input className="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-700 pb-1" type="password" placeholder="Password" />
                    {/* <div className="flex mt-4">
                        <input type="checkbox" className="mr-2" name="agreement" value="agree" />
                        <p className="text-grey">Accept the
                        <a href="#" className=" no-underline text-teal-500 hover:text-teal-400">Terms and Conditions
                        </a>
                        </p>
                    </div> */}
                    {/* <input className="shadow-lg pt-3 pb-3 mt-6 w-full text-white bg-teal-500 hover:bg-teal-400 rounded-full" type="submit" value="SIGN IN" /> */}
                    <a href="">
                        <p className="mt-10 bg-white bg-opacity-10 text-center py-4 border border-gray-600 rounded-full shadow-sm text-1xl font-bold text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2">LOGIN</p>
                    </a>
                </form>
            </div>
            <div className="text-right">
                <p className="mt-4 text-gray-700 text-sm">パスワードを忘れましたか? 
                <a href="#" className="no-underline text-teal-500 hover:text-teal-400">
                     ⇒ ココ
                </a>
                </p>
            </div>
            <div className="pt-20">
                <p className="text-center text-gray-700 font-bold mb-4">アカウント作成</p>
                <Link href="/account/AccountTop">
                <a>
                    <p className="mt-4 bg-white bg-opacity-10 text-center py-4 border border-gray-600 rounded-full shadow-sm text-1xl font-bold text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2">
                        CREATE ACCOUNT
                    </p>
                </a>
                </Link>
            </div>
        </div>
    );
  };

export default LgForm;