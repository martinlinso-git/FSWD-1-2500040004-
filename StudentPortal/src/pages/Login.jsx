import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials')
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Welcome Back!</h2>
        <p>Login to your student account</p>

        <input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>

        <p>New student? <Link to="/register">Create account</Link></p>
      </form>
    </div>
  )
}

export default Login