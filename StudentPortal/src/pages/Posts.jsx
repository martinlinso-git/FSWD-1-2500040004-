import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function Posts() {
  const { user } = useAuth()

  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])

  const addPost = () => {
    if (!content.trim()) return

    const newPost = {
      id: Date.now(),
      author: user?.name,
      content
    }

    setPosts([newPost, ...posts])
    setContent('')
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className="page">
      <h1>Student Community</h1>
      <p>Share your thoughts and achievements.</p>

      <div className="form-card">
        <textarea
          placeholder="What's happening?"
          value={content}
          onChange={e => setContent(e.target.value)}
        />

        <button onClick={addPost}>Publish Post</button>
      </div>

      {posts.map(post => (
        <div className="post-card" key={post.id}>
          <h3>{post.author}</h3>
          <p>{post.content}</p>
          <button onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Posts