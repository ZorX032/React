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
        <div>RigtBranchA


            <button onClick={handlerDark}>Change to dark</button>
            <button onClick={handlerLight}>Change to light</button>
        </div>
    );
};

export default RightBranchA;