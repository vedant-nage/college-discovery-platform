import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function AddCollege() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    rating: "",
    fees: ""
  });

  const handleSubmit = async () => {
    const token =
      localStorage.getItem("token");

    await API.post(
      "/colleges",
      form,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    alert("College Added");
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">
          <h1>Add College</h1>

          <input
            placeholder="Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

          <input
            placeholder="Location"
            onChange={(e) =>
              setForm({
                ...form,
                location: e.target.value
              })
            }
          />

          <input
            placeholder="Rating"
            onChange={(e) =>
              setForm({
                ...form,
                rating: e.target.value
              })
            }
          />

          <input
            placeholder="Fees"
            onChange={(e) =>
              setForm({
                ...form,
                fees: e.target.value
              })
            }
          />

          <button
            onClick={handleSubmit}
          >
            Add College
          </button>
        </div>
      </div>
    </>
  );
}