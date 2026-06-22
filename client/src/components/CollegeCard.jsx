export default function CollegeCard({
  college,
  onSave
}) {
  return (
    <div className="card">
      <h2>{college.name}</h2>

      <p>
        Location: {college.location}
      </p>

      <p>
        Rating: {college.rating}
      </p>

      <p>
        Fees: ₹{college.fees}
      </p>

      <button
        onClick={() =>
          onSave(college._id)
        }
      >
        Save College
      </button>
    </div>
  );
}