import './comment.css'
import Replie from './replies'
import { useContext,useState } from 'react'
import Context from '../context/StaticContext'
import AddReplie from './addReplie'
import EditComment from './editComment'

export default function Comment ({Id,User,Date,Content,Votes,Avatar, replies}){
    const {comments,setComments,user} = useContext(Context)
    const [replie, setreplie] = useState(false);
    const [showModalDelete, setshowModalDelete] = useState(false)
    const [vote, setVote] = useState(Votes);

    const [edit, setedit] = useState(false)

    const handleAddVote=()=>{
        const newInfoComment = comments.filter(com => com.id === Id)

        if(Votes>=vote &&  newInfoComment[0].vote === undefined || newInfoComment[0].vote === 'down'){
            setVote(vote+1)
            newInfoComment[0].score=vote+1
            
            const newStateComments = comments.map(com=>{
                if(com.id===Id && newInfoComment[0].vote === undefined){
                    return (
                        {...newInfoComment[0],
                        vote:'up'}
                        )
                }else if(com.id===Id && newInfoComment[0].vote === 'down'){
                    return (
                        {...newInfoComment[0],
                        vote: undefined}
                        )
                }else{
                    return com
                }
            })

        setComments(newStateComments)
    }

    }

    const handleDiscVote=()=>{

        const newInfoComment = comments.filter(com => com.id === Id)

        if(Votes<=vote &&  newInfoComment[0].vote === undefined || newInfoComment[0].vote === 'up'){
            setVote(vote-1)
            newInfoComment[0].score=vote-1
            
            const newStateComments = comments.map(com=>{
                if(com.id===Id && newInfoComment[0].vote === undefined){
                    return (
                        {...newInfoComment[0],
                        vote:'down'}
                        )
                }else if(com.id===Id && newInfoComment[0].vote === 'up'){
                    return (
                        {...newInfoComment[0],
                        vote: undefined}
                        )
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

    const handleDeleteComment =(e)=>{
        e.preventDefault()
        let commentUpdate = comments.filter(com => com.id !== Id)

        setComments(commentUpdate)
    }
    
    return(
    <>
    <div id={Id} className={"comment "+!edit}>
        <div className="coment-container">
            <div className="top-comment">
                <img src={Avatar} alt="Avatar" />
                <h4>{User}</h4>
                {User === user.username ? <p>you</p> : <></>}
                <h5>{Date}</h5>
            </div>

            <div className="content-comment">
                <p>{Content}</p>
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
    {User === user.username
    ? <EditComment
        Id={Id}
        User={User}
        Date={Date}
        Content={Content}
        Votes={Votes}
        Avatar={Avatar}
        Visibility={edit}
        setedit={setedit}
        />
    :<></>
    }
    <AddReplie 
    Visibility={replie}
    Id={Id}
    User={User}
    setreplie={setreplie}
    />
    
    <div className="replies">

    {replies
    ? replies.map(com=>{
        return(

            <Replie
                key={com.id}
                CommentId={Id}
                Id={com.id}
                User={com.user.username}
                Date={com.createdAt}
                Content={com.content}
                Votes={com.score}
                replyingTo={com.replyingTo}
                Avatar={com.user.image.webp}
            />

        )}
        )
    : ''
    }
    </div>
    <div className={"modal-delete "+ showModalDelete}>
            <div className="modal-container">
                <h2>Delete comment</h2>
                <p>Are you sure you want to delete this comment? This will remove the comment and cant be undone.</p>
                <div className="buttons">
                    <button onClick={ e=> setshowModalDelete(!showModalDelete) }>NO,CANCEL</button>
                    <button onClick={handleDeleteComment}>YES,DELETE</button>
                </div>
            </div>
        </div>
    </>
)
}