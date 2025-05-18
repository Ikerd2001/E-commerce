import React, { useState } from 'react';
import '../css/App.module.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <main className="contact-container">
      <section className="card">
        <h1>Contact Us</h1>
        <p>If you have any questions, suggestions, or need support, feel free to reach out to us!</p>
      </section>

      <section className="card">
        <h2>Our Contact Details:</h2>
        <p>Email: <a href="mailto:gikclothing22@gmail.com">gikclothing22@gmail.com</a></p>
        <p>Phone: <a href="tel:+260968323835">(+260) 968-323-835</a></p>
        <p>
          Address: 1252 Town Center Watch it Grow, opposite CK's shoes store,
          room no. 23, Ndola, Zambia.
        </p>
      </section>

      <section className="card">
        <h2>Send Us a Message:</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="4"
            value={message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default ContactUs;
