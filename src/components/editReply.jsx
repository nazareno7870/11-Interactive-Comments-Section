import { useContext,useState } from 'react'
import './addComment.css'
import './comment.css'
import Context from '../context/StaticContext'

export default function EditReply ({Id,User,Date,Content,Votes,Avatar,Visibility,setedit,replyingTo,CommentId}){
    
    const {comments,setComments} = useContext(Context)
    const [newContent, setnewContent] = useState(Content)

    const handleUpdateReply = (e)=>{
        e.preventDefault()
        let commentUpdate = comments.filter(com => com.id === CommentId)

        const repliesEdited = commentUpdate[0].replies.map(rep =>{

            if(rep.id === Id){
                return {
                    ...rep,
                    content:newContent
                }
            }else{
                return rep
            }
        })

        commentUpdate[0].replies = repliesEdited
        
        const newCommentsState = comments.map(com =>{
            if(com.id === CommentId){
                return commentUpdate[0]
            }else{
                return com
            }
        })

        setComments(newCommentsState)
        setedit(false)

    }

    return(    

    <div id={Id} className={"container-replie "+Visibility}>

        <div className="comment replie">
            <div className="coment-container">
                <div className="top-comment">
                    <img src={Avatar} alt="Avatar" />
                    <h4>{User}</h4>
                    <h5>{Date}</h5>
                </div>

                <form className="content-comment" onSubmit={handleUpdateReply}>
                        <textarea value={newContent} onChange={e=>setnewContent(e.target.value)}></textarea>
                        <button>UPDATE</button>
                </form>
            </div>
        <div className="vote-comment">
            <div className="vote-container">
                <button>+</button>
                <h2>{Votes}</h2>
                <button>-</button>
            </div>

        </div>

        </div>

    </div>
    )
}