import { useState } from 'react'
import './addComment.css'
import { useContext } from 'react'
import Context from '../context/StaticContext'




export default function AddComment ({}){
    const [newComment, setNewComment] = useState('');
    const {comments,setComments} = useContext(Context)

    const handleSubmit = (e)=>{
        const newId = Math.random()*100
        e.preventDefault()
        const addComment ={
            content:newComment,
            createdAt: "Today",
            id:newId,
            replies:[],
            score:0,
            user:{
                image:{
                    png:"./images/avatars/image-juliusomo.png",
                    webp:"./images/avatars/image-juliusomo.webp"
                },
                username:"juliusomo"
            }
        }
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