import './App.css'

import {FC, useEffect} from "react";
import {getAllUsers, saveUser} from "./services/user.service.ts";


const App:FC = () => {
    useEffect(()=>{
        getAllUsers().then(value => console.log(value));
        saveUser({id: 1, name: "John", email:"john@gmail.com"}).then(value => console.log(value));
    },[]);

    return (
        <>

        </>


    );
}

export default App
