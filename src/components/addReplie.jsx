import './addComment.css'
import { useContext,useState } from 'react'
import Context from '../context/StaticContext'

export default function AddReplie ({Visibility,Id,setreplie,User}){
    const {comments,setComments,user} = useContext(Context)
    const [contentReplie, setcontentReplie] = useState('');
    
    const handleReplie =(e)=>{
        e.preventDefault()

        const newReplie = {
            content: contentReplie,
            createdAt: "Today",
            id: 5,
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
        setComments(newStateComments)
        setcontentReplie('')
        setreplie(false)

    }

    return(
        <form className={`form-addComment replie-comment ${Visibility}`} onSubmit={handleReplie}>
            <textarea name="addcomment" id="addcomment" placeholder='Add a comment...' onChange={e=>{setcontentReplie(e.target.value)}} value={contentReplie} ></textarea>
            <button>SEND</button>
            <img src="./images/avatars/image-juliusomo.webp" alt="Avatar" />
        </form>
    )
}