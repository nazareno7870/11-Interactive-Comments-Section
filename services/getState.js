import { useEffect, useContext } from "react";
import Context from "../src/context/StaticContext";

export default function getState (){
    const {setComments,setuser} = useContext(Context)
    const commentStorage = window.localStorage.getItem('comments')
    const userStorage = window.localStorage.getItem('user')

    useEffect(() => {
        
        const fetchData = async() => {
            window.fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                setComments(data.comments)
                setuser(data.currentUser)
            })
        }
        if(commentStorage === null){
            fetchData()
        }else{
            setComments(JSON.parse(commentStorage))
            setuser(JSON.parse(userStorage))
        }
    }, [])

}