import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
          <div>
            <label>Name:<br />
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>Email:<br />
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>Message:<br />
              <textarea name="message" value={form.message} onChange={handleChange} required />
            </label>
          </div>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
