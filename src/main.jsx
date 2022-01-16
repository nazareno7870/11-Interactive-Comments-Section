import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {CommentsContextProvider}  from './context/StaticContext'

ReactDOM.render(
    <CommentsContextProvider>
        <App />
    </CommentsContextProvider>  
    ,document.getElementById('root')
)
