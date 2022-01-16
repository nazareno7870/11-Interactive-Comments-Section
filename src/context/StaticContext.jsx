import React, { useState } from "react"
const Context = React.createContext({})

export function CommentsContextProvider ({children}){
    const [comments, setComments] = useState([])

    return ( <Context.Provider value={{comments,setComments}}>
        {children}
    </Context.Provider>)
}

export default Context