import { useState } from 'react'
import './addComment.css'
import { useContext } from 'react'
import Context from '../context/StaticContext'




export default function AddComment ({}){
    const [newComment, setNewComment] = useState('');
    const {comments,setComments,user,nextId, setnextId} = useContext(Context)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const addComment ={
            content:newComment,
            createdAt: "Today",
            id:nextId,
            replies:[],
            score:0,
            user:{
                image:{
                    png:user.image.png,
                    webp:user.image.webp
                },
                username:user.username
            }
        }
        setnextId(nextId+1)
        setComments([...comments,addComment])
        setNewComment('')
    }

    return(
        <form className='form-addComment' onSubmit={e=> handleSubmit(e)}>
            <textarea name="addcomment" id="addcomment" placeholder='Add a comment...' onChange={e=>setNewComment(e.target.value)} value={newComment}></textarea>
            <button>SEND</button>
            <img src="./images/avatars/image-juliusomo.webp" alt="Avatar" />
        </form>
    )
}