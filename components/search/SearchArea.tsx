import React from "react";

const SearchArea = (props) => {
    return (
        <div className="container py-24">
            <form className="bg-white flex items-center rounded-full shadow-xl"
             onSubmit={props.searchBook} action="">
                <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"
                onChange={props.handleSearch} />
                
                <div className="p-4">
                    <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                        icon
                    </button>
                </div>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">Sort</option>
                    <option value="Newest">新しい順</option>
                    <option value="Oldest">古い順</option>
                </select>
            </form>
        </div>
    );
};

export default SearchArea;