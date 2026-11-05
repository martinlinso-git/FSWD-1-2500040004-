import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { user } = useAuth()

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Showcase Your <span>Journey.</span></h1>

        <p>
          Your achievements, academic records, projects and ideas
          deserve a place to shine. Create your student portfolio
          and share your journey with the world.
        </p>

        {user ? (
          <Link to="/dashboard" className="primary-btn">
            Go to Dashboard
          </Link>
        ) : (
          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home