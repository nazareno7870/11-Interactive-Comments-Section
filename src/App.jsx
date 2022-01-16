import './App.css'
import Comment from './components/comment'
import AddComment from './components/addComment'
import { useContext } from 'react'
import getState from '../services/getState'
import Context from './context/StaticContext'

function App() {
  const {comments,setComments,user} = useContext(Context)
  getState()
  console.log(user)

  return (
    <>
      { comments
      ? comments.map(com =>{
        return(

            <Comment
            key={com.id+1000}
            User={com.user.username}
            Date={com.createdAt}
            Content={com.content}
            Votes={com.score}
            Avatar={com.user.image.webp}
            replies={com.replies}
            />

        )

      })
      : ''
      }

      <AddComment/>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/nazareno7870">Nazareno del Río</a>.
      </div>
    </>
  )
}

export default App
