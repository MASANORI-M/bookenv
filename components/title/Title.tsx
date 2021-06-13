import React from 'react';
import Image from 'next/image';

const Title = (props) => {
    const {childern} = props;
    return (
        <div className="h-96 flex items-center relative">
            <div  className="bg-black z-0 bg-opacity-25" >
                <Image layout="fill" src="/about_top.jpg" alt=""></Image>
                <div className="bg-black absolute inset-0 opacity-40"></div>
            </div>
            <div className="container relative">
                <div className="py-40 text-center">
                    <div>
                        <p className="font-bold text-white text-6xl tracking-wider leading-loose">
                            {childern}
                        </p>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Title;