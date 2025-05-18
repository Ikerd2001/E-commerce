import React, { useState } from "react";
import '../css/App.module.css';

const ComplaintsReview = () => {
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submit
    if (message.trim()) {
      alert(`Message sent: ${message}`); // For demonstration, you can later replace this with an API call
      setMessage(""); // Clear the message after submission
    } else {
      alert("Please enter a message before submitting.");
    }
  };

  return (
    <div className="review-page">
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          placeholder="Write your review here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
        ></textarea>
        <button type="submit">Send Review</button>
      </form>
    </div>
  );
};

export default ComplaintsReview;
