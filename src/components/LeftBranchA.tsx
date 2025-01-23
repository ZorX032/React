import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import "./LeftBranchA.css"



const LeftBranchA = () => {
    const {theme}= useContext(MyContext)
    return (
        <div className={theme}>
            Left Branch A

        </div>
    );
};

export default LeftBranchA;