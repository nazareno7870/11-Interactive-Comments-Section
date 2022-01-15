import './comment.css'
export default function Comment (){
return(
    <div className="comment">

        <div className="top-comment">
            <img src="./images/avatars/image-amyrobson.webp" alt="Avatar" />
            <h4>amyrobson</h4>
            <h5>1 month ago</h5>
        </div>

        <div className="content-comment">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut voluptatibus doloribus dignissimos vel facere iusto.</p>
        </div>

        <div className="vote-comment">
            <button>+</button>
            <h2>12</h2>
            <button>-</button>
        </div>

        <div className="reply">
            <img src="./images/icon-reply.svg" alt="Reply Icon" />
            <h3>Reply</h3>
        </div>
    </div>
)
}