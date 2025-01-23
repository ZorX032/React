import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const RightBranchA = () => {
    const {changeTheme}= useContext(MyContext)
    const handlerDark = () =>{
        changeTheme('dark')
    }
    const handlerLight = () =>{
        changeTheme('light')
    }
    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Right Branch A</h3>
            <div className="space-x-4">
                <button
                    onClick={handlerDark}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
                >
                    Change to Dark
                </button>
                <button
                    onClick={handlerLight}
                    className="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-400"
                >
                    Change to Light
                </button>
            </div>
        </div>
    );
};

export default RightBranchA;