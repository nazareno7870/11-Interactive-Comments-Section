import { useEffect, useContext } from "react";
import Context from "../src/context/StaticContext";

export default function getState (){
    const {setComments,setuser} = useContext(Context)

    useEffect(() => {
        
        const fetchData = async() => {
            window.fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                setComments(data.comments)
                setuser(data.currentUser)
            })
        }
        
        fetchData()
    }, [])

}