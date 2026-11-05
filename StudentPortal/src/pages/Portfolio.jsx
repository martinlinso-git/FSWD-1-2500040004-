import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function Portfolio() {
  const { user } = useAuth()

  const [bio, setBio] = useState('')
  const [skills, setSkills] = useState('')
  const [projects, setProjects] = useState('')

  const savePortfolio = () => {
    alert('Portfolio details ready to be saved!')
  }

  return (
    <div className="page">
      <h1>My Portfolio</h1>

      <div className="profile-card">
        <div className="avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <p>{user?.department}</p>
      </div>

      <div className="form-card">
        <h2>About Me</h2>

        <textarea
          placeholder="Write something about yourself..."
          value={bio}
          onChange={e => setBio(e.target.value)}
        />

        <input
          placeholder="Skills (React, Java, Python...)"
          value={skills}
          onChange={e => setSkills(e.target.value)}
        />

        <textarea
          placeholder="Your projects..."
          value={projects}
          onChange={e => setProjects(e.target.value)}
        />

        <button onClick={savePortfolio}>Save Portfolio</button>
      </div>
    </div>
  )
}

export default Portfolio