import './App.css'
import Comment from './components/comment'
import getAllComments from '../services/getAllComments'
import Replie from './components/replies'

function App() {
  const state = getAllComments()
  return (
    <>
      { state.comments
      ? state.comments.map(com =>{
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



      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/nazareno7870">Nazareno del Río</a>.
      </div>
    </>
  )
}

export default App
