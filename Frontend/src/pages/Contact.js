// Install Axios for making HTTP requests: npm install axios

import React, { useState } from 'react';
import axios from 'axios';
import {Row,Col} from 'react-bootstrap'
import { socialLinks } from '../components/data';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:3001/send-email', formData);
      console.log(response.data); // Log the response from the backend
      alert("Mail Sent Successfully")

      // You can handle success or show a confirmation message to the user
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle errors or show an error message to the user
    }
    setFormData({
      name: '',
    email: '',
    subject: '',
    message: '',
  })
  };

  return (
    <div className='contact'>
      <Row>
        <Col>
        <h2>Connect with Me:</h2>
        <h1>
          <Row>
      {socialLinks.map((socialLink, index) => (
  <Col key={index}>
    <a href={socialLink.link} target='_blank'>{socialLink.icon}</a>
  </Col>
))}
</Row>

      </h1>
        </Col>
        <Col>
      <h2 className='text-center'>Contact Form</h2>
    <form onSubmit={handleSubmit} className='contactForm'>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Subject:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} />
      </label>
      <br />
      <div className='centered-button'>
      <button type="submit">Send Message</button>
      </div>
    </form>
    </Col>
    </Row>
    </div>

  );
};

export default Contact;
