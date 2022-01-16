import { useEffect, useContext } from "react";
import Context from "../src/context/StaticContext";

export default function getAllComments (){
    const {setComments} = useContext(Context)

    useEffect(() => {
        
        const fetchData = async() => {
            window.fetch('./data.json')
            .then(res => res.json())
            .then(data => setComments(data.comments))
        }
        
        fetchData()
    }, [])

}