import './comment.css'
import Replie from './replies'
import { useContext } from 'react'
import Context from '../context/StaticContext'

export default function Comment ({User,Date,Content,Votes,Avatar, replies}){
    const {user} = useContext(Context)

return(
    <>
    <div className="comment">

        <div className="top-comment">
            <img src={Avatar} alt="Avatar" />
            <h4>{User}</h4>
            <h5>{Date}</h5>
        </div>

        <div className="content-comment">
            <p>{Content}</p>
        </div>

        <div className="vote-comment">
            <div className="vote-container">
                <button>+</button>
                <h2>{Votes}</h2>
                <button>-</button>
            </div>

        </div>



            {User === user.username
            ?<> 
                <div className="delete-edit">
                    <div className="delete">
                        <img src="./images/icon-delete.svg" alt="Reply Icon" />
                        <h3>Delete</h3>
                    </div>
                    <div className="edit">
                        <img src="./images/icon-edit.svg" alt="Reply Icon" />
                        <h3>Edit</h3>
                    </div>
                </div>
             </>
            :<>
                <div className="reply">
                    <img src="./images/icon-reply.svg" alt="Reply Icon" />
                    <h3>Reply</h3>
                </div>
            </>}
    </div>
    <div className="replies">

    {replies
    ? replies.map(com=>{
        return(

            <Replie
                key={com.id}
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
    </>
)
}