import { useContext,useState } from 'react'
import './addComment.css'
import Context from '../context/StaticContext'

export default function EditComment ({Id,User,Date,Content,Votes,Avatar,Visibility,setedit}){
    const {comments,setComments,user,nextId, setnextId} = useContext(Context)
    const [newContent, setnewContent] = useState(Content)

    const handleUpdateComment = (e)=>{
        e.preventDefault()
        let commentUpdate = comments.filter(com => com.id === Id)

        commentUpdate[0].content = newContent

        let newStateComments = comments.map(com=>{
            if(com.id === Id){
                return commentUpdate[0]
            }else{
                return com
            }
        })
        setComments(newStateComments)
        setedit(false)

    }

    return(    
    <div id={Id} className={"comment "+Visibility}>

    <div className="top-comment">
        <img src={Avatar} alt="Avatar" />
        <h4>{User}</h4>
        <h5>{Date}</h5>
    </div>

    <form className="content-comment" onSubmit={handleUpdateComment}>
        <textarea value={newContent} onChange={e=>setnewContent(e.target.value)}></textarea>
        <button>UPDATE</button>
    </form>

    <div className="vote-comment">
        <div className="vote-container">
            <button>+</button>
            <h2>{Votes}</h2>
            <button>-</button>
        </div>
    </div>


    </div>)
}