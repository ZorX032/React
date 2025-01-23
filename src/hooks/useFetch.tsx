import {useEffect, useState} from "react";


export const useFetch =<T,> (url:string, defaultValue:T)=>{
   const [obj, seObj] = useState<T>(defaultValue)

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                seObj(value);
            });


    },[]);

    return obj;
}

