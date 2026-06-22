import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import CollegeCard from "../components/CollegeCard";
import SearchBar from "../components/SearchBar";

export default function Colleges() {
  const [colleges, setColleges] = useState([]);

  const fetchColleges = async () => {
    const res = await API.get("/colleges");
    setColleges(res.data);
  };

  const handleSearch = async (
    searchText
  ) => {
    const res = await API.get(
      `/colleges?search=${searchText}`
    );

    setColleges(res.data);
  };

  const saveCollege = async (
    collegeId
  ) => {
    const token =
      localStorage.getItem("token");

    await API.post(
      `/saved/${collegeId}`,
      {},
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    alert("College Saved");
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Colleges</h1>

        <SearchBar
          onSearch={handleSearch}
        />

        {colleges.map((college) => (
          <CollegeCard
            key={college._id}
            college={college}
            onSave={saveCollege}
          />
        ))}
        
      </div>
    </>
  );
}