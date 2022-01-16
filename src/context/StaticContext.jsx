import React, { useState } from "react"
const Context = React.createContext({})

export function CommentsContextProvider ({children}){
    const [comments, setComments] = useState([])
    const [user, setuser] = useState([])


    return ( <Context.Provider value={{comments,setComments,user,setuser}}>
        {children}
    </Context.Provider>)
}

export default Context