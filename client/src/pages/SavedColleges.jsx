import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
export default function SavedColleges() {
  const [saved, setSaved] = useState([]);

  const fetchSaved = async () => {
    const token = localStorage.getItem("token");

    const res = await API.get("/saved", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setSaved(res.data);
  };

  useEffect(() => {
    fetchSaved();
  }, []);

  return (
  <>
    <Navbar />

    <div className="container">
      <h1>Saved Colleges</h1>

      {saved.map((item) => (
        <div
          className="card"
          key={item._id}
        >
          <h2>{item.collegeId?.name}</h2>

          <p>
            Location: {item.collegeId?.location}
          </p>

          <p>
            Rating: {item.collegeId?.rating}
          </p>

          <p>
            Fees: ₹{item.collegeId?.fees}
          </p>
        </div>
      ))}
    </div>
  </>
);
}