import { useEffect, useState } from "react";
let API = "https://api.tvmaze.com/search/shows?q=all";

export default function useDataHook(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(API)
        .then((resp)=>resp.json())
        .then((res)=>setData(res))
        .catch((error)=>console.error(error))
    },[setData])

    return data
}