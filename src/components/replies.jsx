import './comment.css'
import { useContext,useState } from 'react'
import Context from '../context/StaticContext'
import AddReplie from './addReplie'
import EditReply from './editReply'

export default function Replie ({User,Date,Content,Votes,Avatar,replyingTo,Id,CommentId}){
    const {user,setComments,comments} = useContext(Context)
    const [replie, setreplie] = useState(false);
    const [showModalDelete, setshowModalDelete] = useState(false)
    const [vote, setVote] = useState(Votes);

    const [edit, setedit] = useState(false)

    const handleAddVote=()=>{
        const newInfoComment = comments.filter(com => com.id === CommentId)
        const newInfoReplie = newInfoComment[0].replies.filter(rep => rep.id === Id)

        if(Votes>=vote &&  newInfoReplie[0].vote === undefined || newInfoReplie[0].vote === 'down'){
            setVote(vote+1)
            newInfoReplie[0].score=vote+1
            
            const newStateReplies = newInfoComment[0].replies.map(com=>{
                if(com.id===Id && newInfoReplie[0].vote === undefined){
                    return (
                        {...newInfoReplie[0],
                        vote:'up'}
                        )
                }else if(com.id===Id && newInfoReplie[0].vote === 'down'){
                    return (
                        {...newInfoReplie[0],
                        vote: undefined}
                        )
                }else{
                    return com
                }
            })
        
        const newStateComments = comments.map(com=>{
            if(com.id === CommentId){
                return ({
                    ...com,
                    replies:newStateReplies
                })
            }else{
                return com
            }
        })
        setComments(newStateComments)

    }

    }

    const handleDiscVote=()=>{
        const newInfoComment = comments.filter(com => com.id === CommentId)
        const newInfoReplie = newInfoComment[0].replies.filter(rep => rep.id === Id)

        if(Votes<=vote &&  newInfoReplie[0].vote === undefined || newInfoReplie[0].vote === 'up'){
            setVote(vote-1)
            newInfoReplie[0].score=vote-1
            
            const newStateReplies = newInfoComment[0].replies.map(com=>{
                if(com.id===Id && newInfoReplie[0].vote === undefined){
                    return (
                        {...newInfoReplie[0],
                        vote:'down'}
                        )
                }else if(com.id===Id && newInfoReplie[0].vote === 'up'){
                    return (
                        {...newInfoReplie[0],
                        vote: undefined}
                        )
                }else{
                    return com
                }
            })
        
        const newStateComments = comments.map(com=>{
            if(com.id === CommentId){
                return ({
                    ...com,
                    replies:newStateReplies
                })
            }else{
                return com
            }
        })
        setComments(newStateComments)

    }

    }

    const handleShowEditForm = ()=>{
        setedit(!edit)
    }

    const handleShowReplieForm = ()=>{
        setreplie(!replie)
    }

    const handleDeleteReply =(e)=>{
        e.preventDefault()
        let commentUpdate = comments.filter(com => com.id === CommentId)

        const repliesEdited = commentUpdate[0].replies.filter(rep => rep.id !== Id)
         

        commentUpdate[0].replies = repliesEdited
        
        const newCommentsState = comments.map(com =>{
            if(com.id === CommentId){
                return commentUpdate[0]
            }else{
                return com
            }
        })


        setComments(newCommentsState)
    }

return(
    <>
        <div id={Id} className={"container-replie "+!edit}>

            <div className="comment replie">
                <div className="coment-container">
                    <div className="top-comment">
                        <img src={Avatar} alt="Avatar" />
                        <h4>{User}</h4>
                        {User === user.username ? <p>you</p> : <></>}
                        <h5>{Date}</h5>
                    </div>

                    <div className="content-comment">
                        <p><span>@{replyingTo} </span>{Content}</p>
                    </div>
                </div>

                <div className="vote-comment">
                    <div className="vote-container">
                    <button onClick={handleAddVote}>+</button>
                    <h2>{vote}</h2>
                    <button onClick={handleDiscVote}>-</button>
                    </div>

                </div>

                {User === user.username
                    ?<> 
                        <div className="delete-edit">
                            <div className="delete" onClick={e=> setshowModalDelete(!showModalDelete)}>
                                <img src="./images/icon-delete.svg" alt="Reply Icon" />
                                <h3>Delete</h3>
                            </div>
                            <div className="edit" onClick={handleShowEditForm}>
                                <img src="./images/icon-edit.svg" alt="Reply Icon" />
                                <h3>Edit</h3>
                            </div>
                        </div>
                    </>
                    :<>
                        <div className="reply" onClick={handleShowReplieForm}>
                            <img src="./images/icon-reply.svg" alt="Reply Icon" />
                            <h3>Reply</h3>
                        </div>
                    </>}
                
            </div>

        </div>

        {User === user.username
            ? <EditReply
            Id={Id}
            User={User}
            Date={Date}
            Content={Content}
            Votes={Votes}
            Avatar={Avatar}
            Visibility={edit}
            setedit={setedit}
            replyingTo={replyingTo}
            CommentId={CommentId}
             />
            :<></>
        }



        <AddReplie 
        Visibility={replie}
        Id={Id}
        User={User}
        setreplie={setreplie}
        set={'replie'}
        CommentId={CommentId}
        />

        <div className={"modal-delete "+ showModalDelete}>
            <div className="modal-container">
                <h2>Delete comment</h2>
                <p>Are you sure you want to delete this comment? This will remove the comment and cant be undone.</p>
                <div className="buttons">
                    <button onClick={ e=> setshowModalDelete(!showModalDelete) }>NO,CANCEL</button>
                    <button onClick={handleDeleteReply}>YES,DELETE</button>
                </div>
            </div>
        </div>

    </>
)
}