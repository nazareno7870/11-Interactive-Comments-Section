import './comment.css'
export default function Replie ({User,Date,Content,Votes,Avatar,replyingTo}){
return(
    <div className="container-replie">

        <div className="comment replie">

        <div className="top-comment">
            <img src={Avatar} alt="Avatar" />
            <h4>{User}</h4>
            <h5>{Date}</h5>
        </div>

        <div className="content-comment">
            <p><span>@{replyingTo} </span>{Content}</p>
        </div>

        <div className="vote-comment">
            <div className="vote-container">
                <button>+</button>
                <h2>{Votes}</h2>
                <button>-</button>
            </div>

        </div>

        <div className="reply">
            <img src="./images/icon-reply.svg" alt="Reply Icon" />
            <h3>Reply</h3>
        </div>
        </div>

    </div>

)
}