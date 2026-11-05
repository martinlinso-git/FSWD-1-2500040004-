import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="page">
      <h1>Welcome, {user?.name}!</h1>
      <p>Manage your student profile and achievements.</p>

      <div className="dashboard-grid">
        <Link to="/portfolio" className="dashboard-card">
          <h2>👤</h2>
          <h3>My Portfolio</h3>
          <p>Manage your skills and projects.</p>
        </Link>

        <Link to="/posts" className="dashboard-card">
          <h2>📝</h2>
          <h3>My Posts</h3>
          <p>Share your ideas and updates.</p>
        </Link>

        <Link to="/academic" className="dashboard-card">
          <h2>🎓</h2>
          <h3>Academic Records</h3>
          <p>Manage your grades and achievements.</p>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard