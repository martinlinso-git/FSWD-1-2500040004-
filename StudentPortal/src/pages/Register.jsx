import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    department: ''
  })

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await register(form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p>Join the StudentHub community</p>

        <input
          placeholder="Full Name"
          required
          value={form.name}
          onChange={e => setForm({...form, name: e.target.value})}
        />

        <input
          type="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={e => setForm({...form, email: e.target.value})}
        />

        <input
          placeholder="Department"
          required
          value={form.department}
          onChange={e => setForm({...form, department: e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          required
          minLength={6}
          value={form.password}
          onChange={e => setForm({...form, password: e.target.value})}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Register