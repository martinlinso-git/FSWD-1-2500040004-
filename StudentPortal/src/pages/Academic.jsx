import { useState } from 'react'

function Academic() {
  const [records, setRecords] = useState([])
  const [form, setForm] = useState({
    semester: '',
    cgpa: '',
    course: '',
    year: ''
  })

  const addRecord = (e) => {
    e.preventDefault()

    setRecords([...records, {
      ...form,
      id: Date.now()
    }])

    setForm({
      semester: '',
      cgpa: '',
      course: '',
      year: ''
    })
  }

  const deleteRecord = (id) => {
    setRecords(records.filter(record => record.id !== id))
  }

  return (
    <div className="page">
      <h1>Academic Records</h1>
      <p>Keep track of your academic progress.</p>

      <form className="form-card" onSubmit={addRecord}>
        <input
          placeholder="Semester"
          required
          value={form.semester}
          onChange={e => setForm({...form, semester: e.target.value})}
        />

        <input
          type="number"
          placeholder="CGPA"
          min="0"
          max="10"
          step="0.01"
          required
          value={form.cgpa}
          onChange={e => setForm({...form, cgpa: e.target.value})}
        />

        <input
          placeholder="Course / Department"
          required
          value={form.course}
          onChange={e => setForm({...form, course: e.target.value})}
        />

        <input
          placeholder="Academic Year"
          required
          value={form.year}
          onChange={e => setForm({...form, year: e.target.value})}
        />

        <button type="submit">Add Record</button>
      </form>

      <div className="records-grid">
        {records.map(record => (
          <div className="record-card" key={record.id}>
            <h3>{record.semester}</h3>
            <h2>{record.cgpa} CGPA</h2>
            <p>{record.course}</p>
            <p>{record.year}</p>

            <button onClick={() => deleteRecord(record.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      {records.length === 0 && (
        <p className="empty">No academic records added yet.</p>
      )}
    </div>
  )
}

export default Academic