export const SecondButton = (props) => {
    const { childern } = props;
    return (
        <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">{childern}</button>
        </div>
        );    
    };
    
export default SecondButton;