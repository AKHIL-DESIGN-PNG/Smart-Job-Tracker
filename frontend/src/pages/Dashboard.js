import { useEffect, useState } from "react";
import API from "../services/api";
import "./Dashboard.css";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [history, setHistory] = useState([]);
  const [filter, setFilter] = useState("All");

  const loadJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  const addJob = async e => {
    e.preventDefault();
    await API.post("/jobs", {
      company: e.target.company.value,
      role: e.target.role.value,
      status: e.target.status.value,
      appliedDate: e.target.date.value
    });
    e.target.reset();
    loadJobs();
  };

  const deleteJob = async job => {
    if (!window.confirm("Delete this job?")) return;

    await API.delete(`/jobs/${job._id}`);

    // move job to history
    setHistory(prev => [
      {
        ...job,
        deletedAt: new Date().toLocaleString()
      },
      ...prev
    ]);

    // remove from jobs list
    setJobs(prev => prev.filter(j => j._id !== job._id));
  };

  const filteredJobs =
    filter === "All"
      ? jobs
      : filter === "History"
      ? history
      : jobs.filter(j => j.status === filter);

  return (
    <div className="app-wrapper">
      <div className="dashboard">
        {/* NAVBAR */}
        <nav className="navbar navbar-dark bg-primary px-4 sticky-top">
          <span className="navbar-brand">
            Job Tracker — Track Smarter, Apply Better
          </span>
          <div>
            <button
              className="btn btn-light me-2"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              Add Application
            </button>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </nav>

        <div className="dashboard-body">
          {/* SIDEBAR */}
          <div className="sidebar">
            {["All", "Applied", "Interview", "Offer", "Rejected", "History"].map(s => (
              <button key={s} onClick={() => setFilter(s)}>
                {s}
              </button>
            ))}
          </div>

          {/* MAIN CONTENT */}
          <div className="main-content">
            <h2>{filter}</h2>

            {filteredJobs.length === 0 && (
              <p className="text-muted">No records found</p>
            )}

            {filteredJobs.map(job => (
              <div className="card" key={job._id || job.deletedAt}>
                <h4>{job.company}</h4>
                <p>{job.role}</p>
                <p>Status: {job.status}</p>
                <p>
                  Applied On:{" "}
                  {new Date(job.appliedDate).toLocaleDateString()}
                </p>

                {filter === "History" && (
                  <p className="text-muted">
                    Deleted At: {job.deletedAt}
                  </p>
                )}

                {filter !== "History" && (
                  <div className="actions">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteJob(job)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ADD MODAL */}
        <div className="modal fade" id="addModal">
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={addJob}>
              <div className="modal-header">
                <h5>Add Application</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <input name="company" className="form-control mb-2" placeholder="Company" required />
                <input name="role" className="form-control mb-2" placeholder="Role" required />
                <select name="status" className="form-control mb-2">
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
                <input type="date" name="date" className="form-control" required />
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
