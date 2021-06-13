export const Button = (props) => {
const { childern, size } = props;
return (
  
    <div className="inline-block">
      <p className={`mt-10 bg-white bg-opacity-10 text-center py-4 border border-gray-600 rounded-full shadow-sm text-2xl font-bold text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 ${size === 'lg'?'px-20' : 'px-12' }`}>{childern}</p>
    </div>
  
    );    
};

export default Button;