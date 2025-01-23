import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";




const LeftBranchA = () => {
    const {theme}= useContext(MyContext)
    return (
        <div
            className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-teal-200 text-gray-800'}`}>
            <h3 className="text-lg font-semibold">Left Branch A</h3>
        </div>
    );
};

export default LeftBranchA;