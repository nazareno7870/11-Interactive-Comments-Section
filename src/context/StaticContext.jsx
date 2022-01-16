import React, { useState } from "react"
const Context = React.createContext({})

export function CommentsContextProvider ({children}){
    const [comments, setComments] = useState([])
    const [user, setuser] = useState([])
    const [nextId, setnextId] = useState(5)


    return ( <Context.Provider value={{comments,setComments,user,setuser,nextId, setnextId}}>
        {children}
    </Context.Provider>)
}

export default Context