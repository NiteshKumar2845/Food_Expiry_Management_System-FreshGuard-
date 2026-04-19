import { useState } from "react";
import { useNavigate } from "react-router-dom";

// useNavigate: programmatically page change karta hai
// Form submit hone ke baad Home pe bhejenge

function AddFood({ addFood }) {
  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // page redirect ke liye

  // Aaj ki date — past date allow nahi karenge
  const today = new Date().toISOString().split("T")[0]; // "2025-04-12" format

  function handleSubmit() {
    // ─── VALIDATION ───────────────────────────────────────
    if (!name.trim()) {
      setError("Food name cannot be empty.");
      return;
    }
    if (!expiryDate) {
      setError("Please select an expiry date.");
      return;
    }

    // Past date check
    if (expiryDate < today) {
      setError("Warning: This item is already expired! Still adding...");
      // Add karo lekin warning dikhao
      addFood(name.trim(), expiryDate);
      setName("");
      setExpiryDate("");
      setTimeout(() => {
        setError("");
        navigate("/"); // 2 sec baad home pe jao
      }, 2000);
      return;
    }

    // ─── SUCCESS ──────────────────────────────────────────
    setError("");
    addFood(name.trim(), expiryDate);
    setSuccess(`"${name}" added successfully!`);
    setName("");
    setExpiryDate("");

    setTimeout(() => {
      setSuccess("");
      navigate("/"); // home page pe redirect
    }, 1500);
  }

  return (
    <div className="page">
      <h1 className="page-title">Add Food Item</h1>

      <div className="form-card">
        {/* Error message */}
        {error && <div className="msg error">{error}</div>}
        {/* Success message */}
        {success && <div className="msg success">{success}</div>}

        <div className="form-group">
          <label>Food Name</label>
          <input
            type="text"
            placeholder="e.g. Milk, Apple, Bread"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          + Add Item
        </button>
      </div>
    </div>
  );
}

export default AddFood;