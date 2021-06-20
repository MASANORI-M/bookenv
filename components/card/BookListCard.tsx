import React from "react";
import Image from "next/image";

const BookListCard = () => {
    return (
        <div className="p-8">
            <div className="grid grid-cols-2 shadow-xl rounded-lg">
                <Image width={"auto"} height={"auto"} src="/1.jpg" alt=""></Image> 
                <div className="bg-white rounded-b-lg px-8">
                    <div className="pt-8 pb-8">
                        <h1 className="text-2xl font-bold text-gray-700">Link</h1>
                        <p className="text-sm text-gray-600">From hyrule</p>
                        
                        <p className="mt-6 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a sem varius, fringilla sapien at, sollicitudin risus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookListCard;