import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import Link from "next/link";

import Top from '../components/lp/Top';
import Carousel from '../components/lp/carousel';
import CarouselBottom from '../components/lp/CarouselBottom';
import Button from '../components/button/Button';

const Home = () => {
  const { register, handleSubmit, watch, formState: { errors }, getValues, } = useForm();
  const [enabled, setEnabled] = useState<boolean>(false);

  watch(() => {
    const name = getValues('name');
    setEnabled(!name.length);
  });

  const onSubmit = () => {
    console.log();
  }

  return (
    <>
      <Top />
      <div className="bg-gray-100">
        <div className="container pb-44">
          <div className="border-b-4 border-fuchsia-600 border-gray-600 pt-24 pb-4">
            <h2 className="text-gray-600 italic font-bold text-4xl text-center tracking-widest">NEW EVALUATION BOOK</h2>
          </div>
          <Carousel />
        </div>
      </div>
      <section className="bg-gray-100 m-auto pt-44 pb-44 text-center text-gray-600 block">
        <h2 className="text-4xl mb-20">本の価値を正しく伝えるために、知るために</h2>
        <p className="leading-8 text-1xl">
          このサイトが描く未来図は、<br />
          "この本のすばらしさをみんなに知ってもらいたい"<br />
          "この本、気になるけど自分に合うのかな？"<br />
          こんな考えをもつ人たちを繋げたい、<br />
          そんな想いで制作したサービスです。
        </p>
      </section>
      <div className="bg-gray-100">
        <div className="container">
          <div className="border-b-4 border-fuchsia-600 border-gray-600 pb-4">
            <h2 className="text-gray-600 italic font-bold text-4xl text-center tracking-widest">Valuable BooK Evaluationとは</h2>
          </div>
          <div className="text-center pt-12 pb-4">
            <p className="text-gray-600 text-4xl">このサービスの"3つの新しい特徴"</p>
          </div>
          <div className="grid py-40 lg:grid-cols-2 items-center">
            <div className="text-center">
              <Image width="350" height="350" className="rounded-lg shadow-2xl" src="/value1.jpg" alt=""></Image>
            </div>
            <div className="text-gray-600 text-center">
              <h3 className="text-2xl font-bold">1. 本に対するあなたの本当の価値を共有できる</h3>
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
              <h3 className="text-2xl font-bold">2. 確かな内容と本当の価値が分かります。</h3>
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
              <h3 className="text-2xl font-bold">3. あなたに必要な本に出会えます。</h3>
              <p className="text-1xl mt-12 tracking-widest leading-8">
                なぜこの本を読もうと思ったのか、<br />
                なぜこの本の中身が素晴らしいと感じたのか、<br />
                あなたの持つ"本の価値"を発信できます。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container pb-24">
          <div className="border-b-4 border-fuchsia-600 border-gray-600 pt-24 pb-4">
            <h2 className="text-gray-600 italic font-bold text-4xl text-center tracking-widest">LET'S TRY</h2>
          </div>
          <div className="text-center">
            <div className="text-gray-600">
              <p className="font-bold text-2xl mt-20 mb-20 tracking-widest leading-relaxed">
                本好きのあなたに送る、最高の時間を楽しもう!!
              </p>
            </div>
            <Link href="/account/AccountTop">
              <Button childern="READY GO!" size='lg' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;