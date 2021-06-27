import React from "react";
import Image from "next/image";

const BookListCard = (props) => {
    return (
        // <div className="w-64 border-gray-900 m-auto rounded-lg overflow-hidden">
        //     {/* <Image src="{props.image}" alt=""></Image> */}
        //     {/* <img src="{props.image}" alt="" /> */}
        //     <div className="p-3 h-32">
        //         <h2>{props.title}</h2>
        //         <h3>{props.author}</h3>
        //         <p>{props.publishedDate}</p>
        //     </div>
        // </div>


        <div className="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
            {/* <img className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag"> */}
            
            {/* <Image className="md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" height="186" width="128" src={props.image} alt="" /> */}
            <img src={props.image} alt="" />
            
            <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
                <div className="flex items-center">
                    <h2 className="text-xl text-gray-800 font-medium mr-auto">
                        {props.title}
                    </h2>
                </div>
                <div className="flex items-center">
                    <h2 className="text-xl text-gray-800 font-medium mr-auto">
                        {props.author}
                    </h2>
                </div>
                <p className="text-sm text-gray-700 mt-4">
                    {props.publishedDate}
                </p>
                <div className="flex items-center justify-end mt-4 top-auto">
                    <button className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">評価を見る</button>
                </div>
            </div>
        </div>
    );
};

export default BookListCard;