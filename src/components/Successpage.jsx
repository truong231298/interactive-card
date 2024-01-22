import iconComplete from "/images/icon-complete.svg"

const Successpage = ({handleClick}) => {
    return ( 
        <div className="flex flex-col items-center p-8 md:mt-32 md:max-w-md gap-4">
            <img src={iconComplete} alt="" className="w-16"/>
            <h1 className="font-semibold">THANK YOU</h1>
            <p className="text-gray-500">We've added your card details</p>
            <button type="button" className="text-white bg-violet-900 p-2 w-full rounded-lg hover:bg-violet-400"
            onClick={(e) => handleClick(e)}>Continue</button>
        </div>
     );
}
 
export default Successpage;