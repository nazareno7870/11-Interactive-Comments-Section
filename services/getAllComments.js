import { useEffect, useState } from "react";

export default function getAllComments (){
    const [comments, setcomments] = useState([])

    useEffect(() => {
        
        const fetchData = async() => {
            window.fetch('./data.json')
            .then(res => res.json())
            .then(data => setcomments(data))
        }
        
        fetchData()
    }, [])

    return comments
}