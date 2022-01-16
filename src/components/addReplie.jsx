import './addComment.css'
import { useContext,useState } from 'react'
import Context from '../context/StaticContext'

export default function AddReplie ({Visibility,Id,setreplie,User,set,CommentId}){
    const {comments,setComments,user,nextId, setnextId} = useContext(Context)
    const [contentReplie, setcontentReplie] = useState('');

    const handleReplietoReplies= (e)=>{
        e.preventDefault()
        let Comment = comments.filter(com => com.id === CommentId)
        let Replies = Comment[0].replies
        const newReplie = {
            content: contentReplie,
            createdAt: "Today",
            id: nextId,
            replyingTo: User,
            score: 0,
            user:{
                image:{
                    png: user.image.png,
                    webp: user.image.webp
                },
                username: user.username
            }
        }
        Replies = [...Replies,newReplie]
        Comment[0].replies = Replies
        const newStateComments = comments.map(com=>{
            if(com.id === Id){
                return(Comment[0])
            }else{
                return com
            }
        })
        setnextId(nextId+1)
        setComments(newStateComments)
        setcontentReplie('')
        setreplie(false)
        
    }

    const handleReplie =(e)=>{
        e.preventDefault()

        const newReplie = {
            content: contentReplie,
            createdAt: "Today",
            id: nextId,
            replyingTo: User,
            score: 0,
            user:{
                image:{
                    png: user.image.png,
                    webp: user.image.webp
                },
                username: user.username
            }
        }

        const newStateComments = comments.map(com=>{
            if(com.id === Id){
                const newReplies = com.replies
                newReplies.push(newReplie)
                return({
                ...com,
                replies:newReplies})
            }else{
                return com
            }
        })
        setnextId(nextId+1)
        setComments(newStateComments)
        setcontentReplie('')
        setreplie(false)

    }

    if(set === 'replie'){return(
        <div className="comment-replie">
            <form className={`form-addComment replie-comment ${Visibility} replie`} onSubmit={handleReplietoReplies}>
                <textarea name="addcomment" id="addcomment" placeholder='Add a comment...' onChange={e=>{setcontentReplie(e.target.value)}} value={contentReplie} ></textarea>
                <button>REPLY</button>
                <img src="./images/avatars/image-juliusomo.webp" alt="Avatar" />
            </form>
        </div>

    )}else{
        return(
            <form className={`form-addComment replie-comment ${Visibility}`} onSubmit={handleReplie}>
                <textarea name="addcomment" id="addcomment" placeholder='Add a comment...' onChange={e=>{setcontentReplie(e.target.value)}} value={contentReplie} ></textarea>
                <button>REPLY</button>
                <img src="./images/avatars/image-juliusomo.webp" alt="Avatar" />
            </form>
    )

    }
    
}