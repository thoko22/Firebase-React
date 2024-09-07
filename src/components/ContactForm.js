import React, { useState } from "react";
import { database, ref, set } from "./firebase";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique key for each submission
    const userId = Date.now();

    set(ref(database, "contacts/" + userId), formData)
      .then(() => {
        alert("Data submitted successfully!");
        setFormData({ name: "", email: "", number: "" }); // Clear the form
      })
      .catch((error) => {
        alert("Error submitting data: " + error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
