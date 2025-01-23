import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const RightBranchA = () => {
    const {counterValue,increment}= useContext(MyContext)
    return (
        <div>RigtBranchA


            <button onClick={()=>{
                increment(counterValue);
            }}>CLick me to increment counter in LBA </button>
        </div>
    );
};

export default RightBranchA;