import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function HomePage() {
  return (
    <main className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <span className="badge text-bg-primary mb-3">OctoFit Tracker</span>
          <h1 className="display-5 fw-bold">Modern fitness tracking for teams</h1>
          <p className="col-md-8 fs-4">
            Track workouts, monitor progress, lead leaderboards, and connect members
            across your fitness community.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            Explore dashboard
          </Link>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h2 className="h5">Activities</h2>
              <p className="mb-0">Capture workout entries and performance trends.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h2 className="h5">Teams</h2>
              <p className="mb-0">Create and manage squads with shared goals.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h2 className="h5">Leaderboard</h2>
              <p className="mb-0">Celebrate top performers and competitive progress.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit Tracker
          </Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
